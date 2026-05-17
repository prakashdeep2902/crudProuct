import Selleruser from "./model.js";
export const CreateSellerUser = async (req, res) => {
  try {
    const values = req.body;

    if (!values.name && !values.password) {
      return (
        res.status(400),
        json({
          msg: "name and password required",
        })
      );
    }

    const newValues = new Object({
      Name: values.name,
      email: values.email,
      shopName: values.shopname,
      PhNumber: values.phonenumber,
      password: values.password,
    });

    const response = await Selleruser.create(newValues);

    return res.status(201).json({
      msg: "success",
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      err: error,
    });
  }
};
