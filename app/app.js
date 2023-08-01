import dotenv from 'dotenv';
import express from 'express';
import userRoutes from '../routes/usersRoutes.js';
import  globalErrHandler  from '../middlewares/globalErrHandler.js';
import { notFound } from '../middlewares/globalErrHandler.js';
dotenv.config();

import dbConnect from '../config/dbConnect.js';
//db connect
dbConnect();
const app = express();

//pass incomming data
app.use(express.json())

//app Routes
app.use("/api/v1/users/", userRoutes)

//err middleware
app.use(notFound)
app.use(globalErrHandler)
export default app;

