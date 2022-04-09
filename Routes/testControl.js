const express = require('express');
const router = express.Router();
let convert = require('../Converting/testControl.js');
const diabetesBloodPressure = require('../Models/diabetesBloodPressure');
const cholesterol = require('../Models/cholesterol');
const bloodPressure = require('../Models/bloodPressure');
const hbA1c = require('../Models/hbA1c');

const dataArrayRoute = [];

router.post('/', async (req,res) => {
    const data = req.body;
    res.send(data['data']);
    let shippingData = []
    data['data'].forEach(element => {
        shippingData.push(element);
    });

    processedDataArray = convert.convertToDataBase(shippingData);

    hbA1c.destroy({
        where: {},
        truncate: true
    });
    hbA1c.bulkCreate(processedDataArray[0]);

    cholesterol.destroy({
        where: {},
        truncate: true
    });
    cholesterol.bulkCreate(processedDataArray[1]);

    diabetesBloodPressure.destroy({
        where: {},
        truncate: true
    });
    diabetesBloodPressure.bulkCreate(processedDataArray[2]);

    bloodPressure.destroy({
        where: {},
        truncate: true
    });
    bloodPressure.bulkCreate(processedDataArray[3]);
});

module.exports = router;