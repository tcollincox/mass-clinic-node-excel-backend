const sequelize = require('sequelize');
const db = require('../config/database');

const patient = db.define('PatientReferredToTelehealth', {
	PatientAmount:{
		type: sequelize.INTEGER
	},
	RecordedYear:{
		type: sequelize.INTEGER
	},
	PatientType:{
		type: sequelize.STRING
	},
}, {
	freezeTableName: true,
	timestamps: false
});
patient.removeAttribute('id');

module.exports = patient;