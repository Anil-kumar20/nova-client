import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        marginTop : "4rem",
        borderTop : "1px solid #1e293b",
        background: "linear-gradient(135deg, #020617, #020617)",
        color: "#e5e7eb",
      }}
    >
      <div className="container">
        {/* Top Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2rem",
            padding: "3rem 0",
          }}
        >
          {/* Brand */}
          <div>
            <h3 style={{ fontSize: "1.4rem", color: "#38bdf8" }}>
              NovaPortfolio
            </h3>
            <p style={{ marginTop : "0.75rem", fontSize: "0.9rem", opacity: 0.85 }}>
              Full-Stack Developer portfolio built with a custom CMS, React,
              Node.js and MongoDB.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ marginBottom : "0.75rem" }}>Navigation</h4>
            <ul style={{ listStyle: "none", padding: 0, fontSize: "0.9rem" }}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ marginBottom : "0.75rem" }}>Contact</h4>
            <p style={{ fontSize: "0.9rem" }}>📧 admin@novacms.com</p>
            <p style={{ fontSize: "0.9rem" }}>📍 India</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop : "1px solid #1e293b",
            padding: "1rem 0",
            textAlign: "center",
            fontSize: "0.8rem",
            opacity: 0.7,
          }}
        >
          © {new Date().getFullYear()} NovaPortfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
