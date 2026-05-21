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
    const newProducts = await Products.create(req.body);
    res.status(201).json({
      status: 200,
      data: newProducts,
    });
  } catch (error) {
    res.status(500).json({
      msg: "got error",
      error: error.message,
    });
  }
};
