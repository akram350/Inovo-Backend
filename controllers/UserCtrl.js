import User from "../model/user.js";
import bcrypt from 'bcryptjs';
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import { getTokenFromHeader } from "../utils/getTokenFromHeader.js";
import { get } from "mongoose";
import { verifyToken } from "../utils/verifyToken.js";
export const registerUserController =  asyncHandler(async (req,res) =>{
    const {fullName, Email, Password} = req.body 
    // checking if user alrdy exist 
    const userExist = await User.findOne({Email});
    if (userExist){
        
        return new Error("user already exist")
    }
    //hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(Password, salt)
        //creating the user 
        const user = await User.create({
            fullName,Email,Password:hashedpassword,
        })
        res.status(201).json({
            status:"success",
            message:"User registred successfuly",
            data: user,
        })
    
})
export const LoginUserController = asyncHandler (async( req,res) =>{
const {Email, Password} = req.body
const UserFound = await User.findOne({Email});

if(UserFound && await bcrypt.compare(Password,UserFound?.Password)){
   return res.json({
       status:" success",
       msg:"user logged in successfully ",
       UserFound,
       Token: generateToken(UserFound?._id)
    })
} 
else {
throw new Error( "invalide login details")
}
})
export const getUserProfile = asyncHandler(async (req,res) =>{
    const token  = getTokenFromHeader(req)
    // verifying token 
    const verified = verifyToken(token)
    console.log(verified)
    
    res.json({
        msg:"welcome to profile page "
    })
})
    

 
