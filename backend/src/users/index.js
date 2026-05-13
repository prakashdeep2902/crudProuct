import express from 'express';
import { createUsers, loginUsers } from './userControllers.js';
const router = express.Router();


router.post('/register',createUsers)
router.post('/login',loginUsers)


export default router;