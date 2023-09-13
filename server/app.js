const express = require("express");
const app = express();
const dotenv = require("dotenv");
const database = require("./config/database");
const userRouter = require("./routes/User");
const productRouter = require("./routes/Product");
const categoryRouter = require("./routes/Category");

// port
dotenv.config();
const PORT = process.env.PORT || 4000;

//dbConnect
database.connect();

//middlewares
app.use(express.json());

// Routers
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});
app.use("/api/users", userRouter);
app.use("/api/product", productRouter);
app.use("/api/categories", categoryRouter);

//listen
app.listen(PORT, () => {
  console.log(`App is running at ${PORT} `);
});
