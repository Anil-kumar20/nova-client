import { useEffect, useState } from "react";
import api from "../api/api";

export default function BlogsCMS() {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({
    title: "",
    content: "",
    status: "draft",
  });

  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const fetchBlogs = async () => {
    const res = await api.get("/blogs");
    setBlogs(res.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const submit = async () => {
    try {
      await api.post("/blogs", form, { headers });
      setForm({ title: "", content: "", status: "draft" });
      fetchBlogs();
    } catch {
      alert("Failed to create blog");
    }
  };

  const remove = async (id) => {
    await api.delete(`/blogs/${id}`, { headers });
    fetchBlogs();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Blogs CMS</h1>

      <div className="card mb-6">
        <input
          className="border p-2 w-full mb-2"
          placeholder="Blog title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <textarea
          className="border p-2 w-full mb-2"
          placeholder="Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />

        <select
          className="border p-2 w-full mb-4"
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>

        <button
          onClick={submit}
          className="bg-pink-600 text-white px-4 py-2 rounded"
        >
          Create Blog
        </button>
      </div>

      {blogs.map((b) => (
        <div key={b._id} className="card">
          <h2 className="font-semibold">{b.title}</h2>
          <button
            onClick={() => remove(b._id)}
            className="text-red-500 mt-2"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
