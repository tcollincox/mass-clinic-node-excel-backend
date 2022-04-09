const express = require('express');
const router = express.Router();
let convert = require('../Converting/patientDemographics.js');
const demographics = require('../Models/demographics');

const dataArray = [];

router.post('/', async function (req,res){
    const data = req.body;
    dataArray.push(data);
    res.send(dataArray[0]);

    let newDataArray = [];
    dataArray[0].data.forEach(data => {
        let dataArray =convert.convertToDataBase(data);
        dataArray.forEach(data =>{
            newDataArray.push(data);
        });
    });
    demographics.destroy({
        where: {},
        truncate: true
    });
    demographics.bulkCreate(newDataArray);
});

module.exports = router;