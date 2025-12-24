import { useState } from "react";
import api from "../api/api";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submit = async () => {
    await api.post("/messages", form);
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container">
      <h1 className="section-title">Contact</h1>

      <div className="card">
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={{ width : "100%", marginBottom : "1rem", padding: "0.6rem" }}
        />

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={{ width : "100%", marginBottom : "1rem", padding: "0.6rem" }}
        />

        <textarea
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows="4"
          style={{ width : "100%", marginBottom : "1rem", padding: "0.6rem" }}
        />

        <button onClick={submit} style={{ padding: "0.7rem",width : "100%",fontSize: "1rem",}} >
         Send
        </button>

      </div>
    </div>
  );
}
