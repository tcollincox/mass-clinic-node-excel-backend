const express = require('express');
const app = express();
const cors = require('cors');
const MassClinicDb = require('./config/database');


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

const personsEngagedRouter = require('./Routes/personsEngaged');
const outCome = require('./Routes/outCome');
const demographics = require('./Routes/patientDemographics');
const accessibility = require('./Routes/patientAccessibility');
const arrivalTime = require('./Routes/arrivalTime.js');
const noShow = require('./Routes/noShow');


app.use("/personsEngaged", personsEngagedRouter);
app.use("/outCome", outCome);
app.use("/demographics", demographics);
app.use("/accessibility", accessibility);
app.use("/arrivalTime", arrivalTime);
app.use("/noShow", noShow);

app.get('/', (req,res) =>{
    res.send('Hello World');
});

try {
    MassClinicDb.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } 
  

module.exports = app;