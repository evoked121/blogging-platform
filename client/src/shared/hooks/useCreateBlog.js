import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createBlog as createBlogRequest } from "../../api";
import toast from "react-hot-toast";

export const useCreateBlog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const createBlog = async (title, content) => {
    setIsLoading(true);
    const response = await createBlogRequest({
      title,
      content,
    });
    setIsLoading(false);
    if (response.error) {
      console.log(response);
      return toast.error(
        response.exception?.response?.data || "Error occured while create blog"
      );
    }
    navigate("/");
  };
  return { createBlog, isLoading };
};
