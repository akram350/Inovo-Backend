import dotenv from 'dotenv';
import express from 'express';
import userRoutes from '../routes/usersRoutes.js';
dotenv.config();

import dbConnect from '../config/dbConnect.js';

dbConnect();
const app = express();
app.use(express.json())
app.use("/", userRoutes)

export default app;

