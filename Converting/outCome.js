module.exports = {
    convertToDataBase: function(data){
        let localData = data;
        let newDataArray = [];
        let dataKeys = Object.keys(data);
        dataKeys.forEach(key => {
            let trimmed = key.trim();
            if(!localData.hasOwnProperty(trimmed)){
                localData[trimmed] = localData[key];
                delete localData[key];
            }
        });
        dataKeys.forEach(key => {
            if(key.includes("Numerator")){
                let year = key.split(' ')[1];
                let newData = {
                    'TargetPercent' : localData['Target Percent (%)'] * 100,
                    'PercentAchived' : localData['Percent Achieved (%) ' + year] * 100,
                    'RecordedYear' : year,
                    'Numerator': localData['Numerator ' + year],
                    'Denominator': localData['Denominator ' + year]
                }
                newDataArray.push(newData);
            }
        });
        return newDataArray;
    },
    mergeToOne: function (dataArray, extraLabels, objectLabel){
        let newDataArray = dataArray;
        for(let i = 0; i < dataArray.length; i++){
           for(let j = 0; j < dataArray[i].length; j++){
               newDataArray[i][j][objectLabel] = extraLabels[i];
           }
        }
        let fullDataArray = [];
        newDataArray.forEach(dataArray => {
            dataArray.forEach(data =>{
                fullDataArray.push(data);
            })
        });
        return fullDataArray;
    }
}