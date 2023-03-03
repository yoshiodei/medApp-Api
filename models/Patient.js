const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { isAlpha, isEmail, isNumeric } = require('validator');

const baseOptions = { type: String, trim: true, required: true, }

const CoordinateSchema = new mongoose.Schema({
    longitude: baseOptions,
    latitude: baseOptions,
});

const LocationSchema = new mongoose.Schema({
    adress: baseOptions,
    city: baseOptions,
    suburb: baseOptions,
    closestLandMark: baseOptions,
    coordinates: CoordinateSchema
});

const PatientSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: [true, 'Please enter first name'],
        validate: [(value) => { return isAlpha(value) }, 'First name can only include alphabets']
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, 'Please enter last name'],
        validate: [(value) => { return isAlpha(value) }, 'Last name can only include alphabets']
    },
    title: String,
    email: {
        type: String,
        unique: true,
        required: [true, 'Please enter email'],
        lowercase: true,
        validate: [(value) => { return isEmail(value) }, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter password'],
        minlength: [6, 'Minimum password length is 6']
    },
    phoneNumber: {
        type: String,
        unique: true, 
        required: [true, 'Please enter phone number'],
        validate: [(value) => { return isNumeric(value) }, 'Phone number can only include numbers']
    },
    whatsAppNumber: {
        type: String,
        unique: true, 
        required: [true, 'Please enter whatsapp number'],
        validate: [(value) => { return isNumeric(value) }, 'Phone number can only include numbers']
    },
    dateOfBirth: {
        type: Date,
        required: [true, 'Please enter your date of birth'],
    },
    location: LocationSchema,
    serviceHistory: []
}, {timestamps: true});

PatientSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model('Patient', PatientSchema);