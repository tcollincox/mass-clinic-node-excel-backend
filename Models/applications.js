const sequelize = require('sequelize');
const db = require('../config/database');

const applications = db.define('PatientApplicationComplete', {
    ApplicationType: {
        type: sequelize.STRING
    },
    PatientAmount: {
        type: sequelize.INTEGER
    },
    RecordedYear: {
        type: sequelize.INTEGER
    }
}, {
    freezeTableName: true,
    timestamps: false
});
applications.removeAttribute('id');

module.exports = applications;