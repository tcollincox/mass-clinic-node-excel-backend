const express = require('express');
const router = express.Router();
let convert = require('../Converting/patientRetention.js');
const patientRetention = require('../Models/patientRetention');

const dataArrayRoute = [];

router.post('/', async function(req,res){
    const data = req.body;
    dataArrayRoute.push(data);
    res.send(dataArrayRoute[0]);

    let newDataArray = [];
    newDataArray = convert.convertToDataBase(dataArrayRoute[0]);
    patientRetention.destroy({
        where: {},
        truncate: true
    });
    patientRetention.bulkCreate(newDataArray);
});

module.exports = router;