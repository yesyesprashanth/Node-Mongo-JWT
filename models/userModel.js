import mongoose  from "mongoose";

const userScheme = mongoose.Schema({
    username:{
        type:String,
        required:[true, "username is compulsory"],
    },
    email:{
        type:String,
        required:[true, "email is compulsory"],
        unique: [true, "email already exist"]
    },
    password:{
        type:String,
        required:[true, "password is compulsory"],
    }
},{
    timestamps:true,
})

export default mongoose.model("userModel", userScheme);