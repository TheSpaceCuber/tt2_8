import { Sequelize } from "sequelize";
import db from "./db.model.js";
import InsurancePolicies from "./policy.model.js";
const { DataTypes } = Sequelize;

const InsuranceClaims = db.define('insuranceclaims', {
    claimId: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        primaryKey: true
    },
    insuranceId: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        },
    //     references: {
    //         model: InsurancePolicies,
    //         key: 'insuranceId'
    //     }
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    expenseDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    purpose: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    followUp: {
        type: DataTypes.BLOB,
        defaultValue: 0,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    previousClaimId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    lastEditedClaimDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
}, {
    freezeTableName: true
});

export default InsuranceClaims;