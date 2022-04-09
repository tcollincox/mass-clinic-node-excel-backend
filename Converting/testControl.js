module.exports = {
    convertToDataBase: function (sentData){
        let hbA1cArray = [];
        let cholesterolArray = [];
        let diabetesBloodPressureArray = [];
        let bloodPressureArray = [];

        for(let i = 1; i < sentData.length; i++){
            if(i<=4){
                hbA1cArray.push(sentData[i]);
            }
            else if(i > 4 && i <= 6){
                cholesterolArray.push(sentData[i]);
            }
            else if(i>6 && i<=7){
                diabetesBloodPressureArray.push(sentData[i]);
            }
            else if(i>9){
                bloodPressureArray.push(sentData[i]);
            }
        }
        let hbA1cObjArray = [];
        let cholesterolObjArray = [];
        let diabetesBloodPressureObjArray = [];
        let bloodPressureObjArray = [];

        let hbA1cLabelArray = ['Tested at Least Once', 'Poor Control','Excellent Control', 'Control'];
        let cholesterolLabelArray = ['Tested at Least Once', 'Control'];
        let diabetesBloodPressureLabelArray = ['Less than 140/80'];
        let bloodPressureLabelArray = ['Tested at Least Once', 'Control', 'Poor Control'];

        hbA1cArray.forEach((stat, index) => {
            let hbA1c = {
                'LevelOfControl' : hbA1cLabelArray[index],
                'PatientAmount' : stat['01-JAN-2019 thru 31-DEC-2019']
            }
            hbA1cObjArray.push(hbA1c);
        });

        cholesterolArray.forEach((stat, index) => {
            let cholesterol = {
                'LevelOfControl' : cholesterolLabelArray[index],
                'PatientAmount' : stat['01-JAN-2019 thru 31-DEC-2019']
            }
            console.log(cholesterol);
            cholesterolObjArray.push(cholesterol);
        });

        diabetesBloodPressureArray.forEach((stat, index) => {
            let diabetesBloodPressure = {
                'LevelOfControl' : diabetesBloodPressureLabelArray[index],
                'PatientAmount' : stat['01-JAN-2019 thru 31-DEC-2019']
            }
            diabetesBloodPressureObjArray.push(diabetesBloodPressure);
        });

        bloodPressureArray.forEach((stat, index) => {
            let bloodPressure = {
                'LevelOfControl' : bloodPressureLabelArray[index],
                'PatientAmount' : stat['01-JAN-2019 thru 31-DEC-2019']
            }
            bloodPressureObjArray.push(bloodPressure);
        });

        fullDataArray = [hbA1cObjArray, cholesterolObjArray, diabetesBloodPressureObjArray, bloodPressureObjArray]


         

        return fullDataArray;
    }
}