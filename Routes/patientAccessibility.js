const express = require('express');
const router = express.Router();
let convert = require('../Converting/patientAccessibility');
const patientAccessibility = require('../Models/patientAccessibility');


const dataArray = [];

router.post('/', async function (req,res){
    const data = req.body;
    dataArray.push(data);
    res.send(dataArray[0]);

    let newDataArray = [];
    dataArray[0].data.forEach(data => {
        let dataObject =convert.convertToDataBase(data);
        newDataArray.push(dataObject);
    });
    patientAccessibility.destroy({
        where: {},
        truncate: true
    });
    patientAccessibility.bulkCreate(newDataArray);
});

module.exports = router;