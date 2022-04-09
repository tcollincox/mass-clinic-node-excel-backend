module.exports ={
    convertPatientsEngaged: function (data){
        let dataArray = [];
        let singleData = {
            'TargetNumber': data['Target Number'],
            'RecordedYear': 0,
            'PatientAmount': 0
        };
        Object.keys(data).forEach(key =>{
            if(key.includes("Number Achieved")){
                singleData['RecordedYear'] = key.split(' ')[2];
                singleData['PatientAmount'] = data[key];
                dataArray.push(singleData);
            }
        });
        return dataArray;
    },
    convertPatientsOther: function (data){
        let dataArray = [];
        Object.keys(data).forEach(key =>{
            if(key.includes("Number Achieved")){
                let singleData = {
                    'RecordedYear': parseInt(key.split(' ')[2]),
                    'PatientAmount': data[key]
                };
                dataArray.push(singleData);
            }
        });
        return dataArray;
    },
    mergeToOne: function (dataArray, extraLabels, objectLabel){
        let newDataArray = dataArray;
        let returingDataArray = [];
        for(let i = 0; i < dataArray.length; i++){
           for(let j = 0; j < dataArray[i].length; j++){
               newDataArray[i][j][objectLabel] = extraLabels[i];
               returingDataArray.push(newDataArray[i][j]);
           }
        }
        return returingDataArray;
    }
}