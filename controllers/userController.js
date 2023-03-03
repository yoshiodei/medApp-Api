const bcrypt = require('bcryptjs');
const MedicalPersonnel = require('../models/MedicalPersonnel');

const GET_ALL_USERS = (req,res)=>{
    res.cookie('hello','newCookie');

    res.send('get all users!!');
};

const CREATE_NEW_USER = async (req,res)=>{
    try {  
        const user = new MedicalPersonnel(req.body);
        const newUser = await user.save();
        res.status(201).json({newUser});
    }
    catch(err){
        if(err.code === 11000 && err.keyPattern.email === 1){
            res.status(400).json({message: 'Email already exists'}); 
            return;
        }

        if(err.code === 11000 && err.keyPattern.phoneNumber === 1){
            res.status(400).json({message: 'Phone number already exists'})
            return;
        }

        for(let key in err.errors){
            if(err.errors[key].message){
                res.status(400).json({ message: err.errors[key].message });
                return;
            }
        }
    } 
}

const GET_ONE_USER = ()=>{};

const UPDATE_USER = ()=>{};

const DELETE_USER = ()=>{};

module.exports = {GET_ALL_USERS, CREATE_NEW_USER, GET_ONE_USER, UPDATE_USER, DELETE_USER};