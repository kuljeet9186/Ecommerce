import express from "express";
import {
  registerController,
  loginController,
  testController
} from "../controllers/authController.js";

import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/register", registerController);

router.post("/login", loginController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);
//protected route auth
router.get("/user-auth", requireSignIn, (req,res)=>{
  res.status(200).send({
    ok: true
  })
});


export default router;
