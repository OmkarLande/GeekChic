const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();

// User Registration
exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //Validation
    if ((!username, !email, !password)) {
      return res.status(403).json({
        success: false,
        message: "All fields are required",
      });
    }
    // alredyUser?
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    //Password== confirmPassword? at frontend part

    // hashPassword
    const hashedPassword = await bcrypt.hash(password, 10);

    // newUser
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(200).json({
      success: true,
      message: "Registration successful",
      newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// User Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //validate?
    if (!email || !password) {
      return res.status(401).json({
        success: false,
        message: "All fields are required",
      });
    }

    // alreadyUser?
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // correctPassword?
    if (await bcrypt.compare(password, user.password)) {
      // JWT token
      // const payload = {
      //   email: user.email,
      //   id: user._id,
      // };

      const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {
        expiresIn: "4h",
      });

      //createCookie
      const options = {
        expiresIn: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: "Logged In Successfully",
      });
    } 
    else {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
