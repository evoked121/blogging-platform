import express from "express";
import { verifyToken } from "../middlewares/auth.js";
import {
  postPost,
  deletePost,
  updatePost,
  getAllPost,
  getUserPost,
  getOnePost,
} from "../controllers/controllers.js";

const router = express.Router();

router.get("/blogs", getAllPost);
router.get("/userBlogs", verifyToken, getUserPost);
router.get("/oneBlog/:postId", verifyToken, getOnePost);
router.post("/createBlog", verifyToken, postPost);
router.delete("/deleteBlog/:postId", verifyToken, deletePost);
router.put("/updateBlog/:postId", verifyToken, updatePost);

export default router;
