import mongoose from "mongoose";
const Schema = mongoose.Schema;
const userSchema = new Schema({
fullName:{
    type:String,
    required: true,
},
Email:{
    type:String,
    required: true,
},
Password:{
    type:String,
    required: true,
},
fullName:{
    type:String,
    required: true,
},
orders : {
 type:mongoose.Schema.Types.ObjectId,
 ref:"Order",
},
WishLists:{
    type:mongoose.Schema.Types.ObjectId,
 ref:"WishList",
},
isAdmin:{
    type:String,
    required: true,
},
hasShippingAddress:{
    type:Boolean,
    default: false,
},
ShippingAddress:{
    fullName:{
        type:String,
    },
    LastNmae:{
        type:String,
    },
    City:{
        type:String,
    },
    Address:{
        type:String,
    },
    PostalCode:{
        type:String,
    },
    Province:{
        type:String,
    },
    Country:{
        type:String,
    },
    phone:{
        type:String,
    },
},

},
 {
    timestamps:true ,
 } )

 // compiling the schema to model
 const User = mongoose.model('User',userSchema);
 export default User;