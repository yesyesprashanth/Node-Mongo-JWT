import asyncHandler from 'express-async-handler';
import contactModel from "../models/contactModel.js";

// @desc: get all contacts
//route: /contact
// access: public
export const  getAllContacts = asyncHandler(async (req, res, next) => {
    const Contacts = await contactModel.find();
    res.status(200).send({data:Contacts});
});

// @desc: get all contacts
//route: /contact
// access: public
export const createContact = asyncHandler(async(req, res, next) =>{
    const {firstName, lastName, age} = req.body;
    if(!firstName || !lastName || !age){
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const newContact = await contactModel.create({
        firstname: firstName,
        lastname:lastName, 
        age:age,
    })
    
    res.status(200).send({firstName:firstName, lastName:lastName, age:age});
})

// @desc: get all contacts
//route: /contact
// access: public
export const getContact = asyncHandler(async(req, res, next) => {
    if(!id){
        res.status(404);
        throw new Error("Id not found");
    }
    
    res.status(200).send({id:id, data:"All Contacts"});
})

// @desc: update contact
//route: /contact/:id
// access: public
export const updateContact = asyncHandler(async(req, res, next) => {
    const id = req.params.id;
    if(!id){
        res.status(404);
        throw new Error("Id not found");
    }

    const {firstName, lastName, age} = req.body;
    if(!firstName || !lastName || !age){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
  
    res.status(200).send({id:id, data:"All Contacts"});
})

// @desc: delete a contact
//route: /contact/:id
// access: public
export const deleteContact = asyncHandler(async(req, res, next)=>{
    const id = req.params.id;

    if(!id){
        res.status(404);
        throw new Error("Id not found");
    }

    res.status(200).send({id: id, data:"All Contacts"});
})