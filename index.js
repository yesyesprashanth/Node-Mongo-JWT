import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT;
const app = express();

import contactRoute from './routes/contactRoute.js'
import userRoute from './routes/userRoute.js';
import handleError from './middleware/handleError.js';
import mongooseDB from './config/dbConfig.js';

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(handleError);
mongooseDB();

app.use('/contacts', contactRoute);
app.use('/user', userRoute);

app.use('/', (req, res, next)=>{
    res.send("Hello World");
})
app.listen(PORT, ()=>console.log("Server @ " + PORT));