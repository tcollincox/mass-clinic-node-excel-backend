const express = require('express');
const router = express.Router();
const convert = require('../Converting/noShow');
const noShowTable = require('../Models/noShowPatient');

const dataArray = [];

router.post('/', async function(req,res){
    const data = req.body;
    dataArray.push(data);
    res.send(dataArray[0]);
    let newDataArray = [];
    dataArray[0].data.forEach(data => {
        let dataObject =convert.convertToDataBase(data);
        newDataArray.push(dataObject);
    });
    noShowTable.destroy({
        where: {},
        truncate: true
    });
    noShowTable.bulkCreate(newDataArray);
});

module.exports = router;