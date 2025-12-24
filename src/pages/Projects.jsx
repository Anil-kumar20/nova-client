import { useEffect, useState } from "react";
import api from "../api/api";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  useScrollReveal();

  useEffect(() => {
    api.get("/projects").then((res) => setProjects(res.data));
  }, []);

  return (
    <div className="container">
      <h1 className="section-title">Projects</h1>

      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p._id} className="project-card fade-up">
            <img src={p.thumbnail} alt={p.title} />

            <div className="project-overlay">
              <h3>{p.title}</h3>

              <div className="overlay-actions">
                {p.liveUrl && (
                  <a href={p.liveUrl} target="_blank">Live</a>
                )}
                {p.githubUrl && (
                  <a href={p.githubUrl} target="_blank">Code</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
