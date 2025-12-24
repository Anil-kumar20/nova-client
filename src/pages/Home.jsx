import { useEffect, useState } from "react";
import api from "../services/api";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Home() {
  useScrollReveal(); // ✅ REQUIRED

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ background: "linear-gradient(135deg, #0f172a, #1e293b)", color: "#fff", padding: "5rem 1rem" }}>
        <div className="container fade-up">
          <h1 style={{ fontSize: "2.5rem", fontWeight: 700 }}>Hi, I’m Anil 👋</h1>
          <p style={{ marginTop : "1rem", maxWidth : "600px", opacity: 0.9 }}>
            Full-Stack Developer building modern web applications with a custom CMS, React, Node.js and MongoDB.
          </p>
          <p style={{ marginTop : "1rem", maxWidth : "600px", opacity: 0.9 }}>
            I’m a passionate Full-Stack Developer with a strong foundation in computer science and hands-on experience building modern web applications.

I enjoy turning ideas into clean, functional, and user-friendly products — from designing intuitive UIs to developing secure backend APIs.

I’ve built my own custom CMS, worked extensively with the MERN stack, and continuously explore better ways to write clean, maintainable, and scalable code.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="container" style={{ marginTop : "3rem" }}>
        <h2 className="section-title">Latest Posts</h2>

        {loading && <p>Loading posts...</p>}
        {!loading && posts.length === 0 && <p>No posts yet</p>}

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginTop : "1.5rem" }}>
          {posts.map(p => (
            <div key={p._id} className="card fade-up">
              <h3>{p.title}</h3>
              {p.excerpt && <p style={{ marginTop : "0.75rem", opacity: 0.85 }}>{p.excerpt}</p>}
              <span style={{ display: "inline-block", marginTop : "1rem", fontSize: "0.8rem", color: "#475569" }}>
                {new Date(p.createdAt).toLocaleDateString()}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
