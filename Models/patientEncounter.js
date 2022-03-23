const sequelize = require('sequelize');
const db = require('../config/database');

const patient = db.define('patientEncounter', {
	PatientAmount:{
		type: sequelize.INTEGER
	},
	RecordedYear:{
		type: sequelize.INTEGER
	},
	TargetNumber:{
		type: sequelize.INTEGER
	},
}, {
	freezeTableName: true,
	timestamps: false
});
patient.removeAttribute('id');

module.exports = patient;