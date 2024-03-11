import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { updateBlog as updateBlogRequest } from "../../api";
import toast from "react-hot-toast";

export const useUpdateBlog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const updateBlog = async (postId, title, content) => {
    setIsLoading(true);
    const response = await updateBlogRequest(postId, {
      title,
      content,
    });
    setIsLoading(false);
    if (response.error) {
      console.log(response);
      return toast.error(
        response.exception?.response?.data || "Error occured while update blog"
      );
    }
    navigate("/personal-blogs");
  };
  return { updateBlog, isLoading };
};
