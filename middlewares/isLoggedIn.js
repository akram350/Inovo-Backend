import {getTokenFromHeader}  from "../utils/getTokenFromHeader.js";
import { verifyToken } from "../utils/verifyToken.js";

const isLoggedIn = (req,res,next) => {
    //get token from headers 
   const token =  getTokenFromHeader(req)
    //verifying id token is valid 
   const decodedUser =  verifyToken(token)
   if(!decodedUser){
    throw new Eroor("Token expired pleas login again ")
   }
   else{
    req.user.AuthId= decodedUser?.id
    next()
   }
   
}
 
export default isLoggedIn;