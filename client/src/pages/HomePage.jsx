import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/blogs").then((response) => {
      setBlogs(response.data.data);
    });
  }, []);

  return (
    <div className="w-4/5 m-auto pt-4">
      <div className="flex justify-between">
        <h1>All Blogs</h1>
        <Link
          to={"/new"}
          className="bg-black text-white p-2 text-lg rounded-lg ml-auto"
        >
          Add new blog
        </Link>
      </div>
      <div>
        {blogs.length > 0 &&
          blogs.map((blog) => <BlogCard key={blog._id} {...blog} />)}
      </div>
    </div>
  );
};

export default HomePage;
