import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

const linkStyle = (path) => ({
  color: pathname === path ? "#38bdf8" : "#e5e7eb",
  fontWeight: pathname === path ? "600" : "400",
  position: "relative",
});

  return (
    <nav
      style={{
        position: "sticky",
        top : 0,
        zIndex: 100,
        background: "linear-gradient(135deg, #020617, #020617)",
        borderBottom : "1px solid #1e293b",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 0",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontSize: "1.3rem",
            fontWeight: 700,
            color: "#38bdf8",
            letterSpacing: "0.5px",
          }}
        >
         <h2 style={{ color: "#38bdf8" }}>Nova Portfolio</h2>
        </Link>

        {/* Links */}
        <div
          style={{
            display: "flex",
            gap: "1.25rem",
            flexWrap: "wrap",
            fontSize: "0.95rem",
          }}
        >
          <Link to="/" style={linkStyle("/")}>Home</Link>
          <Link to="/about" style={linkStyle("/about")}>About</Link>
          <Link to="/projects" style={linkStyle("/projects")}>Projects</Link>
          <Link to="/blogs" style={linkStyle("/blogs")}>Blogs</Link>
          <Link to="/experience" style={linkStyle("/experience")}>Experience</Link>
          <Link to="/contact" style={linkStyle("/contact")}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
