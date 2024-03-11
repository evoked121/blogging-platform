import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { deleteBlog as deleteBlogRequest } from "../../api";
import toast from "react-hot-toast";

export const useDeleteBlog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const deleteBlog = async (postId) => {
    setIsLoading(true);
    const response = await deleteBlogRequest(postId);
    setIsLoading(false);
    if (response.error) {
      return toast.error(
        response.exception?.response?.data || "Error occured while loggin"
      );
    }

    navigate("/personal-blogs");
  };
  return { deleteBlog, isLoading };
};
