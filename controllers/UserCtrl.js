import User from "../model/user.js";
import bcrypt from 'bcryptjs';
export const registerUserController = async (req,res) =>{
    const {fullName, Email, Password} = req.body 
    // checking if user alrdy exist 
    const userExist = await User.findOne({Email});
    if (userExist){
        res.json({
            msg:"user already exist"
        })
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
    
}
export const LoginUserController = async( req,res) =>{
const {Email, Password} = req.body
const UserFound = await User.findOne({Email});

if(UserFound && await bcrypt.compare(Password,UserFound?.Password)){
   return res.json({
       status:" success",
       msg:"user logged in successfully ",
       UserFound,
    })
} 
else {res.json({
    msg:"Login error"

})
}

}
