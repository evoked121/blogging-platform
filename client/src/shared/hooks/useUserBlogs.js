import { useState } from "react";
import { getUserBlogs as getUserBlogsRequest } from "../../api";
import toast from "react-hot-toast";

export const useUserBlogs = () => {
  const [userBlogs, setUserBlogs] = useState(null);

  const getUserBlogs = async () => {
    const responseData = await getUserBlogsRequest();
    if (responseData.error) {
      return toast.error(
        responseData.exception?.response?.data ||
          "Error occured when get channels"
      );
    }
    setUserBlogs(responseData.data.posts);
  };
  return {
    isFetching: !userBlogs,
    getUserBlogs,
    userBlogs,
  };
};
