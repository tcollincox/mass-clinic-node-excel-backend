const sequelize = require('sequelize');
const db = require('../config/database');

const patients = db.define('providedScreening', {
	PatientAmount:{
		type: sequelize.INTEGER
	},
	RecordedYear:{
		type: sequelize.INTEGER
	},
}, {
	freezeTableName: true,
	timestamps: false
});
patients.removeAttribute('id');

module.exports = patients;