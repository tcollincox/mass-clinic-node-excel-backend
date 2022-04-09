module.exports = {
    convertToDataBase: function (data){
        let dataArrayToReturn = [];
        let dataArray = data['data'];
        let totalYearsPossible = data['data'].length - 2;
        let yearCountStart = 0;
        
        for(let i = 0; i < totalYearsPossible; i++){
            let tempObject = {
                'AmountOfYears': i + 1,
                'PatientAmount': 0
            }
            dataArrayToReturn.push(tempObject);
        }
        let releventData = [];
        for(let j = 1; j< dataArray.length - 1; j++){
            releventData.push(dataArray[j]);
        }
        releventData.forEach(element => {    
            let keys = Object.keys(element);
            for(let t = 0; t < keys.length; t++){
                if(keys[t].includes('__EMPTY_')){
                    let totalAmount = keys[t].replace('__EMPTY_','') - yearCountStart;
                    dataArrayToReturn[totalAmount - 1]['PatientAmount'] += element[keys[t]];
                }
            }
            yearCountStart++;
        });
        return dataArrayToReturn;
    }
}