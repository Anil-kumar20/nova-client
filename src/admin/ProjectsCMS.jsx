import { useEffect, useState } from "react";
import api from "../api/api";

export default function ProjectsCMS() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "draft",
  });

  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const fetchProjects = async () => {
    const res = await api.get("/projects");
    setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const submit = async () => {
    try {
      await api.post("/projects", form, { headers });
      setForm({ title: "", description: "", status: "draft" });
      fetchProjects();
    } catch {
      alert("Failed to save project");
    }
  };

  const remove = async (id) => {
    await api.delete(`/projects/${id}`, { headers });
    fetchProjects();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Projects CMS</h1>

      <div className="card mb-6">
        <input
          className="border p-2 w-full mb-2"
          placeholder="Project title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <textarea
          className="border p-2 w-full mb-2"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
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
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Create Project
        </button>
      </div>

      {projects.map((p) => (
        <div key={p._id} className="card">
          <h2 className="font-semibold">{p.title}</h2>
          <p>{p.description}</p>
          <button
            onClick={() => remove(p._id)}
            className="mt-2 text-red-500"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
