import express from "express";
import {
    registerUser
} from "../controllers/employees.controller.js";
import { verifyUser, adminOnly } from "../middleware/authUser.middleware.js";

const router = express.Router();

router.post('/register', registerUser);

export default router;