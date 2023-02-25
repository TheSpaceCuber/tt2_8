import express from "express";
import {
    createPolicy,
} from "../controllers/policy.controller.js";
import { generateAccessToken, authenticateToken } from '../jwt.js';

const policyRouter = express.Router();

policyRouter.post('/add-policy/', authenticateToken, createPolicy);


export default policyRouter;