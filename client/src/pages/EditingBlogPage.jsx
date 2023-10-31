import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogForm from "../components/BlogForm";

const EditingBlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`http://localhost:8080/api/blogs/${id}`).then((response) => {
      setBlog(response.data.data);
    });
  }, [id]);

  return (
    <div className="w-4/5 m-auto pt-4">
      <h1 className="pb-4">Edit Blog</h1>
      {blog && <BlogForm {...blog} />}
    </div>
  );
};

export default EditingBlogPage;
