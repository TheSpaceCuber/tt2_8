import InsuranceClaims from '../models/claims.model.js';
// import Employees from '../models/employees.model.js';
import InsurancePolicies from '../models/policy.model.js';

import { Sequelize, DataTypes, Op } from "sequelize"

export const createInsuranceClaim = async(req, res) => {
    const { insuranceId, firstName, lastName, expenseDate,amount,purpose, followUp, previousClaimId} = req.body;
    try {
        const insuranceclaim = await InsuranceClaims.create({
            
            insuranceId: insuranceId,
            firstName: firstName,
            lastName: lastName,
            expenseDate: expenseDate,
            amount: amount,
            purpose: purpose,
            followUp: followUp,
            previousClaimId: previousClaimId,
            status: "Pending",
            lastEditedClaimDate: new Date().toString()

        });
        res.status(201).json({ msg: `Insurance Claim${insuranceclaim.claimId} has been successfully created` });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

export const getAllClaimsForEmployee = async(req, res) => {
    const relevantPolicies = await InsurancePolicies.findAll({
        where: {
            employeeId: req.params.employeeId
        }
    });
    console.log(relevantPolicies);
    if (!relevantPolicies) return res.status(404).json({ msg: "Employee Policies Not Found" });

    const insuranceIds = []
    for (const insurancepolicies of relevantPolicies) {
        insuranceIds.push(insurancepolicies.insuranceId);
    }

    try {
        const relevantClaims = await InsuranceClaims.findAll({
            where: {
                insuranceId: insuranceIds
            }
        });
        if (relevantClaims.length === 0) return res.status(404).json({ msg: "Employee Claims Not Found"});
        res.status(200).json(relevantClaims);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}


// export const editInsuranceClaim = async(req, res) => {
//     const {}
// }


export const deleteInsuranceClaim = async(req, res) => {

    const insuranceclaim = await InsuranceClaims.findOne({
        where: {
            claimId: req.params.id
        }
    });
    if (!insuranceclaim) return res.status(404).json({ msg: "Insurance Claim does not exist" });

    //check if claim is in "Pending" status to be deleted
    if (insuranceclaim.status != "Pending") return res.status(500).json({ msg: "Insurance Claim cannot be deleted. Not in Pending Status" });
    try {
        await InsuranceClaims.destroy({
            where: {
                claimId: insuranceclaim.claimId
            }
        });
        res.status(200).json({ msg: `Insurance Claim ${insuranceclaim.claimId} has been successfully deleted.` });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const editInsuranceClaim = async(req, res) => {
    let {expenseDate,amount,purpose, followUp, previousClaimId} = req.body;

    const insuranceclaim = await InsuranceClaims.findOne({
        where: {
            claimId: req.params.id
        }
    });

    if (!insuranceclaim) return res.status(404).json({ msg: "Insurance Claim does not exist" });

    expenseDate = expenseDate ?? insuranceclaim.expenseDate;
    amount = amount ?? insuranceclaim.amount;
    purpose = purpose ?? insuranceclaim.purpose;
    followUp = followUp ?? insuranceclaim.followUp;
    previousClaimId = previousClaimId ?? insuranceclaim.previousClaimId;
    let lastEditedClaimDate = new Date().toString();

    //check if claim is in "Pending" status to be deleted
    if (insuranceclaim.status == "Approved") return res.status(500).json({ msg: "Insurance Claim cannot be editted. Can only be editted if in Pending or Rejected Status" });
    try {
        const insuranceclaim = await InsuranceClaims.update({  
            expenseDate: expenseDate,
            amount: amount,
            purpose: purpose,
            followUp: followUp,
            previousClaimId: previousClaimId,
            lastEditedClaimDate: lastEditedClaimDate

        }, { where: {claimId: req.params.id}, fields: ["expenseDate", "amount", "purpose", "followUp", "previousClaimId", "lastEditedClaimDate"]});
        res.status(200).json({ msg: `Insurance Claim ${req.params.id} has been successfully edited.` });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
