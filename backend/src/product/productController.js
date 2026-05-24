import Products from "./productSchema.js";
import cloudinary from "../../config/cloudinary.js";
import fs from "fs";
import path from "path";
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
    if (!req.files || !req.files.thumbnail) {
      return res.status(400).json({
        success: false,
        message: "Thumbnail file is required",
      });
    }

    const thumbnail = req.files.thumbnail[0];

    // convert path for windows
    const localPath = path.resolve(thumbnail.path);

    // check file exists
    if (!fs.existsSync(localPath)) {
      return res.status(400).json({
        success: false,
        message: "File not found on server",
      });
    }

    const uploadresult = await cloudinary.uploader.upload(localPath, {
      folder: "products",
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    });

    // delete local file
    fs.unlinkSync(localPath);

    const product = await Products.create({
      ...req.body,
      thumbnail: {
        url: uploadresult.secure_url,
      },
    });

    res.status(201).json({
      status: 200,
      success: true,
      product,
    });
  } catch (error) {
    console.log("ERROR::::", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
