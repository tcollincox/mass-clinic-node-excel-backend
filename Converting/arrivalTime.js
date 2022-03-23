module.exports ={
    convertToDataBase: function (data){
        if(data['Patient Arrival on Time'] != null){
            let singleData = {
                'TimeArrived': data['Patient Arrival on Time'],
                'PercentAmount': parseFloat(data['Percentage']),
                'PatientAmount': data['Count'],
            };
            return singleData;
        } 
    }
}