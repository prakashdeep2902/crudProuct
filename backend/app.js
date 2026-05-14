import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
dotenv.config();
import router from "./src/index.js";
const app = express();
import db from "./db.js";
app.use(cors());
// app.use(helmet());
app.use(express.json());

app.use("/api", router);

const port = process.env.port;
app.listen(port, () => {
  console.log(`server is running on port Number ${port}`);
});
