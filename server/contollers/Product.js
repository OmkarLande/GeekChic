const Product = require("../models/product");
const Category = require("../models/category");
const category = require("../models/category");

// create Products
exports.createproduct = async (req, res) => {
  try {
    const { name, description, price, image, sizeOptions, categoryId } = req.body;

    // Create a new product
    const newProduct = new Product({
      name,
      description,
      price,
      image,
      sizeOptions,
      category,
    });

    //validation
    if( !name || !description || !price || !category ){
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    //Category validation
    // const categoryDetails = await Category.findById(category);
    // if(!categoryDetails){
    //     return res.status(404).json({
    //         success:false,
    //         message:'Category not found',
    //     });
    // }

    // newProduct
    const product = await Product.create({
      name,
      description,
      price,
      image,
      sizeOptions,
      category: categoryDetails._id
    })

    res.status(201).json({ 
      success: true,
      message: 'Product created successfully', 
      product: product 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false,
      message: 'Server error' 
    });
  }
};

// List Products
exports.listProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      success: true,
      message: "Success!!",
      products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// Product Details
exports.product = async (req, res) => {
  try {
    const productId = req.params.productId;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Success!!",
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

