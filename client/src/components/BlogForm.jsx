import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const BlogForm = ({
  _id,
  title: existingTitle,
  body: existingBody,
  image: existingImage,
  createAt,
}) => {
  const [title, setTitle] = useState(existingTitle || "");
  const [body, setBody] = useState(existingBody || "");
  const [image, setImage] = useState(existingImage || "");
  const [redirect, setRedirect] = useState(false);

  async function saveBlog(ev) {
    ev.preventDefault();
    const data = { title, image, body };
    if (_id) {
      // update
      await axios.put("http://localhost:8080/api/blogs/" + _id, data);
      setRedirect(true);
    } else {
      // create
      await axios.post("http://localhost:8080/api/blogs", data);
      setRedirect(true);
    }
  }

  console.log(_id);

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <form className="flex flex-col gap-3 text-xl w-full m-auto">
      <div className="flex justify-between">
        <label>Title</label>
        <input
          className="border rounded-lg w-2/3 p-3"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
      </div>

      <div className="flex justify-between">
        <label>Image URL</label>
        <input
          className="border rounded-lg w-2/3 p-3"
          type="text"
          placeholder="Image"
          value={image}
          onChange={(ev) => setImage(ev.target.value)}
        />
      </div>

      <div className="flex justify-between">
        <label>Body</label>
        <textarea
          className="border rounded-lg w-2/3 p-3 h-96"
          type="text"
          placeholder="Body"
          value={body}
          onChange={(ev) => setBody(ev.target.value)}
        />
      </div>
      <div className="flex m-auto gap-5">
        <button
          className="bg-blue-300 px-4 py-2 rounded-lg m-auto"
          onClick={saveBlog}
        >
          Save
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-lg m-auto"
          onClick={() => {
            setRedirect(true);
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default BlogForm;
