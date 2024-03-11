import React from "react";
import { Route, Routes } from "react-router-dom";
import { Blogs } from "./Blogs.js";
import { PersonalBlogs } from "./PersonalBlogs.js";

import { UpdateBlog } from "./UpdateBlog.js";
import { CreateBlog } from "./CreateBlog.js";
export const Content = () => {
  return (
    <div className="content-container">
      <Routes>
        <Route path="" element={<Blogs />} />
        <Route path="personal-blogs" element={<PersonalBlogs />} />

        <Route path="update-blog/:id" element={<UpdateBlog />} />
        <Route path="create-blog" element={<CreateBlog />} />
      </Routes>
    </div>
  );
};
