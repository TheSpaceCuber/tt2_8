import express from "express";
import{
    createInsuranceClaim,
    getInsuranceClaim,
    editInsuranceClaim,
    deleteInsuranceClaim
} from "../controllers/claims.controller.js";
// import { verifyUser, adminOnly } from "../middleware/authUser.middleware.js";

const claimsRouter = express.Router();

//(1) Get all claims of employee id
claimsRouter.get('/claims/:id', getInsuranceClaim);

//(2) Create claim
claimsRouter.post('/add-claim', createInsuranceClaim);

//(3) Edit claim
claimsRouter.patch('/edit-claim/:id', editInsuranceClaim);

//(4) Delete claim
claimsRouter.delete('/delete-claim/:id', deleteInsuranceClaim);

export default claimsRouter;
