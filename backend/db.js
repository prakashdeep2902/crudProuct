import mongoose from "mongoose";
const db = mongoose
  .connect(process.env.LOCALURL)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

export default db;
