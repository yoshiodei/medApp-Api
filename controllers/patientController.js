const Patient = require('../models/Patient');

const GET_ALL_PATIENTS = () => {};

const GET_ONE_PATIENT = () => {};

const CREATE_NEW_PATIENT = async (req, res) => {
    try{
        const patient = new Patient(req.body);
        const newPatient = await patient.save();
        res.status(201).json(newPatient);
    }
    catch(err){
        res.status(400).json(err);
    }
}

const UPDATE_PATIENT = () => {};

const DELETE_PATIENT = () => {};

module.exports = { GET_ALL_PATIENTS, GET_ONE_PATIENT, CREATE_NEW_PATIENT, UPDATE_PATIENT, DELETE_PATIENT };