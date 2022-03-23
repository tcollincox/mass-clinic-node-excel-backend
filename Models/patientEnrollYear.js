const sequelize = require('sequelize');
const db = require('../config/database');

const patient = db.define('patientEnrollYear', {
	YearEnrolled:{
		type: sequelize.INTEGER
	},
	YearLeft:{
		type: sequelize.INTEGER
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