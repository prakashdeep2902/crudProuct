import mongoose from "mongoose";

console.log(process.env.LOCALURL);

const db = mongoose
  .connect("mongodb://127.0.0.1:27017/ecommerce")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

export default db;
