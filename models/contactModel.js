import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    firstname:{
        type:String,
        required:[true, "First name is compulsory"],
    },
    lastname:{
        type:String,
        required:[true, "Last name is compulsory"],        
    },
    age:{
        type:Number,
        required:[true, "Age is compulsory"]
    }
})

export default mongoose.model("contactModel", contactSchema);