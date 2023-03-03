const router = require('express').Router();
const { 
    GET_ALL_PATIENTS, 
    GET_ONE_PATIENT, 
    CREATE_NEW_PATIENT, 
    UPDATE_PATIENT, 
    DELETE_PATIENT 
} = require('../controllers/patientController');

router.get('/all', GET_ALL_PATIENTS);

router.get('/', GET_ONE_PATIENT);

router.get('/new', CREATE_NEW_PATIENT);

router.get('/edit', UPDATE_PATIENT);

router.get('/delete', DELETE_PATIENT);