import { Router } from "express";
import authController from "../controllers/auth.controller";

const router = Router()

router.get('/',authController.GetAllUsers)
router.post('/create',authController.RegisterUser)


export default router