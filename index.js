const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const app = express();
const userRoute = require('./routes/user');
require('dotenv').config();
mongoose.set('strictQuery', true);

const PORT = process.env.port || 3003;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/user', userRoute);
app.use('/patient', userRoute);

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, ()=>{
    console.log('connected to database!!');
});

app.listen(PORT, ()=>{ 
    console.log(`listening to port ${PORT}!!`); 
  });