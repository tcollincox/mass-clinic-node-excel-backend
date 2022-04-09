const sequelize = require('sequelize');
const db = require('../config/database');

const patients = db.define('cholesterol', {
	LevelOfControl:{
		type: sequelize.STRING
	},
	PatientAmount:{
		type: sequelize.INTEGER
	},
}, {
	freezeTableName: true,
	timestamps: false
});
patients.removeAttribute('id');

module.exports = patients;