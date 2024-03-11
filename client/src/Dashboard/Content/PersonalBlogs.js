import React, { useEffect } from "react";
import { Blog } from "../../shared/components/Blog.js";
import { useUserBlogs } from "../../shared/hooks/useUserBlogs.js";
import { LoadingSpinner } from "../../shared/components/LoadingSpinner.js";
import { useDeleteBlog } from "../../shared/hooks/useDeleteBlog.js";

export const PersonalBlogs = () => {
  const { userBlogs, isFetching, getUserBlogs } = useUserBlogs();
  const { deleteBlog, isLoading } = useDeleteBlog();

  useEffect(() => {
    getUserBlogs();
  }, [getUserBlogs]);

  if (isFetching) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      {userBlogs.map((blog) => (
        <Blog
          key={blog._id}
          id={blog._id}
          title={blog.title}
          content={blog.content}
          author={blog.author}
          isUser={true}
          isPublic={false}
          handler={deleteBlog}
          isLoading={isLoading}
        />
      ))}
    </div>
  );
};
