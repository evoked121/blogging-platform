import { useState } from "react";
import { getBlogs as getBlogsRequest } from "../../api";
import toast from "react-hot-toast";

export const useBlogs = () => {
  const [blogs, setBlogs] = useState(null);

  const getBlogs = async () => {
    const responseData = await getBlogsRequest();
    if (responseData.error) {
      return toast.error(
        responseData.exception?.response?.data ||
          "Error occured when get channels"
      );
    }
    setBlogs(responseData.data.posts);
  };
  return {
    isFetching: !blogs,
    getBlogs,
    blogs,
  };
};
