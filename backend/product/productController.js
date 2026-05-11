import Products from "./productSchema.js";

export const getProduct = async (req, res) => {
  try {
    const products = await Products.find({});
    res.status(201).json({
      msg: "data fetched successfully",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      msg: "got error",
      error: error.message,
    });
  }
};

export const CreatProduct = async (req, res) => {
  try {
    const { name, Price, category } = req.body;
    const newProducts = await Products.create({
      name,
      Price,
      category: category,
    });

    res.status(201).json({
      msg: "Product created successfully",
      data: newProducts,
    });
  } catch (error) {
    res.status(500).json({
      msg: "got error",
      error: error.message,
    });
  }
};
