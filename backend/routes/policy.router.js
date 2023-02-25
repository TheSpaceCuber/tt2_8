import express from "express";
import{
    createPolicy,
} from "../controllers/policy.controller.js";

const policyRouter = express.Router();

policyRouter.post('/add-policy', createPolicy);


export default policyRouter;