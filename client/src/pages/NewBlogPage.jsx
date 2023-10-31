import React from "react";
import BlogForm from "../components/BlogForm";

const NewBlogPage = () => {
  return (
    <div className="pt-4 w-4/5 m-auto">
      <h1 className="pb-4">New Blog</h1>
      <BlogForm />
    </div>
  );
};

export default NewBlogPage;
