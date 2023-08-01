import express from "express";
import { registerUserController, LoginUserController , getUserProfile} from "../controllers/UserCtrl.js";
import isLoggedIn from "../middlewares/isLoggedIn.js";
const userRoutes = express.Router( );
userRoutes.post('/register', registerUserController)
userRoutes.post('/Login', LoginUserController)
userRoutes.get('/Profile', getUserProfile)
export default userRoutes ;