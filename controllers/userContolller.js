import asyncHandler from 'express-async-handler';
import userModel from '../models/userModel.js';
import constants from '../constants.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
//@desc User login 
//@route /user/login
//@access private

export const userLogin = asyncHandler(async(req,res,next) =>{
    const {email, password} = req.body;

    console.log(email, password);

    if(!email || !password){
        res.status(constants.VALIDAITON_ERROR);
        throw new Error("All fields mandatory");
    }

    //Check if emailid exist
    const emailExist = await userModel.findOne({email});
    if(emailExist && await bcrypt.compare(password, emailExist.password)){
        //Create a JWT
        console.log(emailExist.id);
        const token = jwt.sign(
            {
                user:{
                    username: emailExist.username,
                    email: emailExist.email,
                    id : emailExist._id
                }
            }, process.env.ACCESS_TOKEN_SECRET, {expiresIn:'1m'}        
        );
        res.status(200).send({token:token, result:"login successfull"});
    }else{
        res.status(404);
        throw new Error("user with this email id is not registered");
    }
    
})

export const userRegister = asyncHandler(async(req,res,next)=>{
    const {username, email, password} = req.body;    
    if(!username || !email || !password){
        res.status(400);

        throw new Error("All fields are mandatory");
    }

    //Check if already registered
    const checkUser = await userModel.findOne({email});
    if(checkUser){
        res.status(constants.SERVER_ERROR);

        throw new Error("Email Already Exist");
    }   

    const cryptedPassword = await bcrypt.hash(password, 10);

    console.log(username, email, password, cryptedPassword);

    const createdUser = await userModel.create({
        username,
        email,
        password: cryptedPassword,
    });

    res.status(200).send(createdUser);
})