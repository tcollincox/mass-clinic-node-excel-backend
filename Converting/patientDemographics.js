module.exports ={
    convertToDataBase: function (data){
        let dataArray = [];
        
        Object.keys(data).forEach(key =>{
            if(key.includes("Number Achieved")){
                let singleData = {
                    'DemographicType': data['Person Engaged / Services Provided'],
                    'RecordedYear': key.split(' ')[2],
                    'PatientAmount': data[key]
                };
                dataArray.push(singleData);
            }
        });
        return dataArray;
    }
}