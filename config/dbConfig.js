import mongoose from "mongoose";

export default async function connectMongoose(){
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("db connected", connect.Connection.name);
    }
    catch(err){
        console.log("Error", err.message);
        process.exit(1);
    }
    
}