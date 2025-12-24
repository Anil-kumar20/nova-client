import { useEffect, useState } from "react";
import api from "../api/api";

export default function ExperienceCMS() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    title: "",
    org: "",
    year: "",
    description: "",
  });

  const token = localStorage.getItem("token");

  const fetchData = () => {
    api.get("/experience").then(res => setItems(res.data));
  };

  useEffect(fetchData, []);

  const submit = async () => {
    await api.post("/experience", form, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setForm({ title: "", org: "", year: "", description: "" });
    fetchData();
  };

  const del = async (id) => {
    await api.delete(`/experience/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchData();
  };

  return (
    <div className="container">
      <h1 className="section-title">Experience CMS</h1>

      <div className="card">
        <input placeholder="Title" onChange={e => setForm({ ...form, title: e.target.value })} />
        <input placeholder="Organization" onChange={e => setForm({ ...form, org: e.target.value })} />
        <input placeholder="Year" onChange={e => setForm({ ...form, year: e.target.value })} />
        <textarea placeholder="Description" onChange={e => setForm({ ...form, description: e.target.value })} />
        <button onClick={submit}>Add Experience</button>
      </div>

      {items.map(i => (
        <div key={i._id} className="card">
          <h3>{i.title}</h3>
          <p>{i.org} — {i.year}</p>
          <p>{i.description}</p>
          <button onClick={() => del(i._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
