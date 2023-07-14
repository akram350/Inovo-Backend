import express from "express";
import { registerUserController, LoginUserController } from "../controllers/UserCtrl.js";
const userRoutes = express.Router( );
userRoutes.post('/api/v1/users/register', registerUserController)
userRoutes.post('/api/v1/users/Login', LoginUserController)
export default userRoutes ;