const express = require('express');
const router = express.Router();
let convert = require('../Converting/arrivalTime');
const arrivalTime = require('../Models/patientArrivalTime');

const dataArray = [];

router.post('/', async function(req,res){
    const data = req.body;
    dataArray.push(data);
    let newDataArray = [];
    res.send(dataArray[0]);
    dataArray[0].data.forEach(data => {
        if('Patient Arrival on Time' in data){
            let dataObject =convert.convertToDataBase(data);
            newDataArray.push(dataObject);
        }
    });
    arrivalTime.destroy({
        where: {},
        truncate: true
    });
    arrivalTime.bulkCreate(newDataArray)
});

module.exports = router;