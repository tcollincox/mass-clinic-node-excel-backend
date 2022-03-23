const sequelize = require('sequelize');
const db = require('../config/database');

const patients = db.define('bloodA1C', {
	TimePeriod:{
		type: sequelize.STRING
	},
	NumDom:{
		type: sequelize.STRING
	},
	TotalPercent:{
		type: sequelize.FLOAT
	},
	PatientAmountSpecifc:{
		type: sequelize.INTEGER
	},
	PatientAmountTotal:{
		type: sequelize.INTEGER
	},
}, {
	freezeTableName: true,
	timestamps: false
});
patients.removeAttribute('id');

module.exports = patients;