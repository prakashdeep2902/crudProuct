import express from 'express';
const router = express.Router();
import users from './users/index.js';
import Products from './product/index.js';

const app = express();

app.use('/user',users)
app.use("/product",Products)

export default app;