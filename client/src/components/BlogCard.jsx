import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ _id, title, image, body, createAt }) => {
  async function deleteBlog(ev) {
    ev.preventDefault();
    await axios.delete("http://localhost:8080/api/blogs/" + _id);
  }

  return (
    <div className="flex border mx-auto my-3 p-2 items-center justify-between rounded-lg h-36 w-full">
      <div className="flex items-center w-2/3 gap-7">
        <img className="max-h-24 rounded-lg" src={image} alt="" />
        <h2 className="text-2xl truncate">{title}</h2>
      </div>{" "}
      <h5>{createAt}</h5>
      <div className="flex gap-3 mr-3 text-xl">
        <Link to={"/" + _id} className="border p-2 rounded-lg bg-blue-300">
          Update
        </Link>
        <button
          onClick={deleteBlog}
          className="border p-2 rounded-lg bg-red-400"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
