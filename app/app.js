import dotenv from 'dotenv';
import express from 'express';
dotenv.config();

import dbConnect from '../config/dbConnect.js';

dbConnect();
const app = express();
export default app;

