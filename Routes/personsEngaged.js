const express = require('express');
const router = express.Router();
let convert = require('../Converting/personsEngaged.js');

const dataArray = [];

router.post('/', (req,res) => {
    const data = req.body;
    dataArray.push(data);
    res.send(dataArray[0]);
    personsEngagedTotal = convert.convertPatientsEngaged(dataArray[0].data[0]);
    personsEngagedDuplicated = convert.convertPatientsOther(dataArray[0].data[1]);
    //Merge to one
    diabeticPatientsServed = convert.convertPatientsOther(dataArray[0].data[2]);
    hypertensivePatientsServed = convert.convertPatientsOther(dataArray[0].data[3]);
    dualPatientsServed = convert.convertPatientsOther(dataArray[0].data[4]);
    allPatientsServed = convert.mergeToOne([diabeticPatientsServed,hypertensivePatientsServed,dualPatientsServed], ['Diabetic', 'Hypertensive','Dual' ], "PatientType");
    //Merge to one
    volunteers = convert.convertPatientsOther(dataArray[0].data[5]);
    nonvolunteers = convert.convertPatientsOther(dataArray[0].data[6]);
    allVolunteers = convert.mergeToOne([volunteers,nonvolunteers], ['Medical', 'Non-Medical'], "VolunteerType");

    screenings = convert.convertPatientsOther(dataArray[0].data[7]);
    //Merge to one
    referralsToMassClinic = convert.convertPatientsOther(dataArray[0].data[8]);
    referralsFromMassClinic = convert.convertPatientsOther(dataArray[0].data[9]);
    allReferralsMassClinic = convert.mergeToOne([referralsToMassClinic,referralsFromMassClinic], ['To', 'From'], "ReferralType");
    //Merge to one
    diabeticToTelehealth = convert.convertPatientsOther(dataArray[0].data[10]);
    hypertensiveToTelehealth = convert.convertPatientsOther(dataArray[0].data[11]);
    dualToTelehealth = convert.convertPatientsOther(dataArray[0].data[12]);
    allTelehealth = convert.mergeToOne([diabeticToTelehealth,hypertensiveToTelehealth,dualToTelehealth], ['Diabetic', 'Hypertensive','Dual' ], "PatientType");
    //Merge to one
    followUpDiabetic = convert.convertPatientsOther(dataArray[0].data[13]);
    followUpHypertensive = convert.convertPatientsOther(dataArray[0].data[14]);
    followUpDual = convert.convertPatientsOther(dataArray[0].data[15]);
    allFollowUp = convert.mergeToOne([followUpDiabetic,followUpHypertensive,followUpDual], ['Diabetic', 'Hypertensive','Dual' ], "PatientType");
    //Merge to one
    medicalInsuranceApplications = convert.convertPatientsOther(dataArray[0].data[16]);
    prescriptionApplications = convert.convertPatientsOther(dataArray[0].data[17]);
    allApplications = convert.mergeToOne([medicalInsuranceApplications,prescriptionApplications], ['Insurance', 'Prescriptions'], "ApplicationType");
});

router.get('/', (req,res)=>{
    res.send(personsEngaged);
});

module.exports = router;