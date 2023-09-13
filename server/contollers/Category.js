const Category = require("../models/category"); 

//createCategory
exports.createcategory = async (req, res) => {
	try {
		const { name, description } = req.body; 
		if (!name || !description ) {
			return res.status(400).json({
            success: false,
            message: "All fields are required",
          });
		}
        
		const CategorysDetails = await Category.create({
			name: name,
			description: description,
		});

		console.log(CategorysDetails);
		return res.status(200).json({
			success: true,
			message: "Category Created Successfully"
		});
	} catch (error) {
		return res.status(500).json({
			success: true,
			message: "server error",
		});
	}
};

// List Categories
exports.categorieslist = async (req, res) => {
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
