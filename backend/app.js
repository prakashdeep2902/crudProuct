import "./config/config.js";
import express from "express";
import cors from "cors";
import helmet from "helmet";

import router from "./src/index.js";
import db from "./db.js";

const app = express();

app.use(cors());
// app.use(helmet());
app.use(express.json());

app.use("/api", router);

const port = process.env.port;

app.listen(port, () => {
  console.log(`server is running on port Number ${port}`);
});
