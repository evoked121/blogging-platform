import React from "react";

export const Comment = ({ author, content }) => {
  return (
    <div>
      {author} {content}
    </div>
  );
};
