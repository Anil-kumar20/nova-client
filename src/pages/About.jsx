import { useEffect, useState } from "react";
import api from "../api/api";

export default function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    api.get("/about").then((res) => setAbout(res.data));
  }, []);

  if (!about) return null;

  return (
    <div className="container">
      <h1 className="section-title">{about.title}</h1>

      <div className="card fade-up">
        <p>{about.description}</p>
      </div>

      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {about.skills.map((s) => (
          <span key={s} className="skill-pill">{s}</span>
        ))}
      </div>

      <h2 className="section-title">Interests</h2>
      <div className="card">
        {about.interests.join(" • ")}
      </div>
    </div>
  );
}
