module.exports ={
    convertToDataBase: function (data){
        let singleData = {
            'RecordedYear': data['No Show Rate'],
            'PercentAmount': parseFloat(data['Percentage']).toFixed(3),
        };
        return singleData;
    }
}