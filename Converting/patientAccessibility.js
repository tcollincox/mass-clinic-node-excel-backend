module.exports ={
    convertToDataBase: function (data){
        let singleData = {
            'AmountOfTime': data['Patient accessibility'],
            'PercentAmount': parseFloat((data['__EMPTY_2']/data['__EMPTY_1']).toFixed(3)),
            'TotalAmount': data['__EMPTY_1'],
            'SpecificAmount': data['__EMPTY_2']
        };
            
        return singleData;
    }
}