import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useOneBlog } from "../../shared/hooks/useOneBlog";
import { LoadingSpinner } from "../../shared/components/LoadingSpinner.js";
import "./../../AuthPage/authPage.css";
import { useUpdateBlog } from "../../shared/hooks/useUpdateBlog.js";

export const UpdateBlog = () => {
  const { id } = useParams();

  const { userBlog, getOneBlog, isFetching } = useOneBlog();
  const { updateBlog, isLoading } = useUpdateBlog();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    getOneBlog(id);
  }, []);

  useEffect(() => {
    if (userBlog) {
      setTitle(userBlog.title);
      setContent(userBlog.content);
    }
  }, [userBlog]);

  if (isFetching) {
    return <LoadingSpinner />;
  }

  const handleUpdatePost = (event) => {
    event.preventDefault();
    updateBlog(id, title, content);
  };

  return (
    <div>
      <div className="login-container">
        <form className="auth-form">
          <div className="auth-form-label">title</div>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <div className="auth-form-label">content</div>
          <input value={content} onChange={(e) => setContent(e.target.value)} />
        </form>
        <button onClick={handleUpdatePost} disabled={isLoading}>
          update the post
        </button>
      </div>
      ;
    </div>
  );
};
