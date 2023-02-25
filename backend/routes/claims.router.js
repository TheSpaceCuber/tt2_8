import express from "express";
import{
    createUser,
    getUserById,
    updateUserPassword,
    updateUserCreditAdd,
    updateUserCreditMinus,
    deleteUser
} from "../controllers/claims.controller.js";
// import { verifyUser, adminOnly } from "../middleware/authUser.middleware.js";

const router = express.Router();

router.post('/users', createUser);
router.get('/users/uuid/:id', verifyUser, getUserById);
router.patch('/users/updatepw/:id', verifyUser, updateUserPassword);
router.patch('/users/addcred/:id', verifyUser, updateUserCreditAdd);
router.patch('/users/minuscred/:id', verifyUser, updateUserCreditMinus);
router.delete('/users/delete/:id', verifyUser, deleteUser);

export default router;
