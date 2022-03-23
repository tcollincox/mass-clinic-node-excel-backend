const express = require('express');
const router = express.Router();
let convert = require('../Converting/patientAccessibility');

const dataArray = [];

router.post('/', (req,res) => {
    const data = req.body;
    dataArray.push(data);
    res.send(dataArray[0]);

    let newDataArray = [];
    dataArray[0].data.forEach(data => {
        let dataObject =convert.convertToDataBase(data);
        newDataArray.push(dataObject);
    });
});

module.exports = router;