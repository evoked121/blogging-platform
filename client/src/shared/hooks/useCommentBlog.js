import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { commentBlog as commentBlogRequest } from "../../api";
import toast from "react-hot-toast";

export const useCommentBlog = () => {
  const [isComment, setIsComment] = useState(false);
  const navigate = useNavigate();

  const commentBlog = async (postId, content) => {
    setIsComment(true);
    const response = await commentBlogRequest(postId, {
      content,
    });
    setIsComment(false);
    if (response.error) {
      console.log(response);
      return toast.error(
        response.exception?.response?.data || "Error occured while comment blog"
      );
    }
    navigate("/");
  };
  return { commentBlog, isComment };
};
