const sequelize = require('sequelize');
const db = require('../config/database');

const patient = db.define('uniquePatientInYear', {
	AmountOfYears:{
		type: sequelize.STRING
	},
	PatientAmount:{
		type: sequelize.INTEGER
	},
}, {
	freezeTableName: true,
	timestamps: false
});
patient.removeAttribute('id');

module.exports = patient;