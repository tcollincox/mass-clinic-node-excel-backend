const sequelize = require('sequelize');
const db = require('../config/database');

const Patient = db.define('pctChronicCare', {
	TargetPercent:{
		type: sequelize.INTEGER
	},
	PercentAchived:{
		type: sequelize.INTEGER
	},
	RecordedYear:{
		type: sequelize.INTEGER
	},
	Numerator:{
		type: sequelize.INTEGER
	},
	Denominator:{
		type: sequelize.INTEGER
	},
}, {
	freezeTableName: true,
	timestamps: false
});
Patient.removeAttribute('id');

module.exports = Patient;