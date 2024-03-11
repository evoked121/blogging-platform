import React, { useState } from "react";
import "./../../AuthPage/authPage.css";
import { useCreateBlog } from "../../shared/hooks/useCreateBlog.js";
import { LoadingSpinner } from "../../shared/components/LoadingSpinner.js";

export const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { createBlog, isLoading } = useCreateBlog();

  const handleCreatePost = (event) => {
    event.preventDefault();
    createBlog(title, content);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="login-container">
      <form className="auth-form">
        <div className="auth-form-label">title</div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <div className="auth-form-label">content</div>
        <input value={content} onChange={(e) => setContent(e.target.value)} />
      </form>
      <button onClick={handleCreatePost}>send the post</button>
    </div>
  );
};
