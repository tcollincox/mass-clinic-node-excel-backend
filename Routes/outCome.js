const express = require('express');
const router = express.Router();
let convert = require('../Converting/outCome.js');

const dataArray = [];

router.post('/', (req,res) => {
    const data = req.body;
    dataArray.push(data);
    res.send(dataArray[0]);

    let newDataArray = [];
    dataArray[0].data.forEach(data => {
        let dataArray =convert.convertToDataBase(data);
        newDataArray.push(dataArray);
    });
    //merge
    let twentyPerDiabeticTelehealth = newDataArray[0];
    let twentyPerHypertensiveTelehealth = newDataArray[1];
    let twentyPerDualTelehealth = newDataArray[2];
    let twentyPerTelehealth = convert.mergeToOne([twentyPerDiabeticTelehealth,twentyPerHypertensiveTelehealth,twentyPerDualTelehealth], ['Diabetic', 'Hypertensive','Dual' ], "PatientType");
    //merge
    let fiftyPerDiabeticFollowUp = newDataArray[3];
    let fiftyPerHypertensiveFollowUp = newDataArray[4];
    let fiftyPerDualFollowUp = newDataArray[5];
    let fiftyPerFollowUp = convert.mergeToOne([fiftyPerDiabeticFollowUp,fiftyPerHypertensiveFollowUp,fiftyPerDualFollowUp], ['Diabetic', 'Hypertensive','Dual' ], "PatientType");

    let twentyPerEligible = newDataArray[6];
    let eightyFivePerApplication = newDataArray[7];
    let ninetyFivePerScreened = newDataArray[8];
    //merge
    let twentyFivePerDiabeticTelehealthAndFollowUp = newDataArray[9];
    let twentyFivePerHypertensiveTelehealthAndFollowUp = newDataArray[10];
    let twentyFivePerDualTelehealthAndFollowUp = newDataArray[11];
    let twentyFivePerTelehealthAndFollowUp = convert.mergeToOne([twentyFivePerDiabeticTelehealthAndFollowUp,twentyFivePerHypertensiveTelehealthAndFollowUp,twentyFivePerDualTelehealthAndFollowUp], ['Diabetic', 'Hypertensive','Dual' ], "PatientType");
});

module.exports = router;