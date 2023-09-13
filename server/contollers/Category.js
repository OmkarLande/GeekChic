const express = require("express");
const Category = require("../models/category"); 

// List Categories
exports.categories = async (req, res) => {
  try {
    // categoriesList
    const categories = await Category.find();
    res.status(200).json({
      success: true,
      message: "Success!!",
      categories,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
