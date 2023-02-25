import express from "express";
import {
    createInsuranceClaim,
    getAllClaimsForEmployee,
    // getInsuranceClaim,
    editInsuranceClaim,
    deleteInsuranceClaim
} from "../controllers/claims.controller.js";
import { generateAccessToken, authenticateToken } from '../jwt.js';

const claimsRouter = express.Router();

// (1) Get all claims for employee
claimsRouter.get('/claims/:employeeId', authenticateToken, getAllClaimsForEmployee)

//(2) Create claim
claimsRouter.post('/add-claim', authenticateToken, createInsuranceClaim);


//(3) Edit claim
claimsRouter.patch('/edit-claim/:id', authenticateToken, editInsuranceClaim);

//(4) Delete claim
claimsRouter.delete('/delete-claim/:id', authenticateToken, deleteInsuranceClaim);

export default claimsRouter;