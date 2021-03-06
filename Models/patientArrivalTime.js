const sequelize = require('sequelize');
const db = require('../config/database');

const patientArrivalTimes = db.define('PatientArrivalTime', {
    TimeArrived: {
        type: sequelize.STRING
    },
    PercentAmount: {
        type: sequelize.REAL
    },
    PatientAmount: {
        type: sequelize.INTEGER
    }
}, {
    freezeTableName: true,
    timestamps: false,
});
patientArrivalTimes.removeAttribute('id');

module.exports = patientArrivalTimes;