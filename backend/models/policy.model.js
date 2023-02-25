import { Sequelize } from "sequelize";
import db from "./db.model.js";
import Employees from "./employees.model.js";
const { DataTypes } = Sequelize;

const InsurancePolicies = db.define('insurancepolicies', {
    insuranceId: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        primaryKey: true //primary key
    },
    employeeId: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        reference: { //foreign key
            model: Employees,
            key: 'employeeId'
        }
    },
    insuranceType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 100]
        }
    },
    policyStartDate: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 255]
        }
    },
    policyTerm: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 100]
        }
    },
    policyEndDate: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 255]
        }
    },
    claimLimit: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
        allowNull: false,
        validate: {
            min: 0.0
        }
    },
    remainingClaimLimit: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
        allowNull: false,
        validate: {
            min: 0.0
        }
    },
}, {
    freezeTableName: true
});

//define association between Post and User
InsurancePolicies.belongsTo(Employees)

export default InsurancePolicies;