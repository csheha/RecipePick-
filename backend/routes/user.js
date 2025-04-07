import express from "express";

import { userLogin, userSignup, getUser } from "../controllers/user.js";

const router = express.Router();
dotenv.config();

router.post("/signup", userSignup); //user signup
router.post("/login", userLogin); //user login
router.get("/user/:id", getUser); //get user by ID

export default router;
