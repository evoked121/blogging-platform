import express from "express";
import { verifyToken } from "../middlewares/auth.js";
import { postComment } from "../controllers/controllers.js";

const router = express.Router();

router.post("/postComment/:postId", verifyToken, postComment);

export default router;
