import { useState } from "react";
import { OneBlog as OneBlogRequest } from "../../api";
import toast from "react-hot-toast";

export const useOneBlog = () => {
  const [userBlog, setUserBlog] = useState(null);

  const getOneBlog = async (postId) => {
    const response = await OneBlogRequest(postId);

    if (response.error) {
      return toast.error(
        response.exception?.response?.data || "Error occured while loggin"
      );
    }
    setUserBlog(response.data.post);
  };
  return { isFetching: !userBlog, getOneBlog, userBlog };
};
