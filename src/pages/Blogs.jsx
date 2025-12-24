import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    api.get("/blogs").then((res) => setBlogs(res.data));
  }, []);

  return (
    <div className="container">
      <h1 className="section-title">Blogs</h1>

      {blogs.map((b) => (
        <Link key={b._id} to={`/blogs/${b.slug}`}>
          <div className="card">
            <h2>{b.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
