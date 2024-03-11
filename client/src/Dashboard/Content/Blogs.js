import React, { useEffect } from "react";
import { Blog } from "../../shared/components/Blog.js";
import { useBlogs } from "../../shared/hooks/useBlogs.js";

import { LoadingSpinner } from "../../shared/components/LoadingSpinner.js";
import { useUserDetails } from "../../shared/hooks/useUserDetails.js";

export const Blogs = () => {
  const { isFetching, getBlogs, blogs } = useBlogs();
  const { isLogged } = useUserDetails();
  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  if (isFetching) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      {blogs.map((blog) => (
        <Blog
          key={blog._id}
          id={blog._id}
          title={blog.title}
          content={blog.content}
          author={blog.author}
          comments={blog.comments}
          isLogged={isLogged}
        />
      ))}
    </div>
  );
};
