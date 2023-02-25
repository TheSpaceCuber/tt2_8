import InsurancePolicies from '../models/policy.model.js';

export const createPolicy = async(req, res) => {
    const { employeeId, insuranceType, policyStartDate, policyTerm, policyEndDate, claimLimit} = req.body;
    try {
        const insurancePolicy = await InsurancePolicies.create({
            employeeId: employeeId,
            insuranceType: insuranceType,
            policyStartDate: policyStartDate,
            policyTerm: policyTerm,
            policyEndDate: policyEndDate,
            claimLimit: claimLimit,
            remainingClaimLit: claimLimit
        });
        res.status(201).json({ msg: `Policy ${insurancePolicy.insuranceId} has been successfully created` });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}
