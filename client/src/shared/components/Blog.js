import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Comment } from "./Comment";
import { useCommentBlog } from "../hooks/useCommentBlog";

export const Blog = ({
  id,
  title,
  content,
  author,
  comments,
  isUser = false,
  isPublic = true,
  handler,
  isLoading,
  isLogged = false,
}) => {
  const [com, setCom] = useState("");
  const navigate = useNavigate();

  const { commentBlog, isComment } = useCommentBlog();
  const deleteHander = () => {
    handler(id);
  };

  const commentHandler = (event) => {
    event.preventDefault(id);
    commentBlog(id, com);
  };

  return (
    <div>
      <span>
        {title} {}
      </span>
      <span>
        {content} {}
      </span>
      <span>
        {author} {}
      </span>

      {comments?.map((comment) => (
        <Comment
          key={comment._id}
          author={comment.author}
          content={comment.content}
        />
      ))}

      {isUser && (
        <button onClick={() => navigate(`/update-blog/${id}`)}>edit</button>
      )}
      {isUser && (
        <button disabled={isLoading} onClick={deleteHander}>
          delete
        </button>
      )}
      {isPublic & isLogged ? (
        <>
          <input value={com} onChange={(e) => setCom(e.target.value)} />
          <button disabled={isComment} onClick={commentHandler}>
            comment the post
          </button>
        </>
      ) : (
        <div />
      )}
    </div>
  );
};
