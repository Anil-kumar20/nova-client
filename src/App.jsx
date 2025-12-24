import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Layouts */
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";

/* Public Pages */
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

/* Admin Pages */
import AdminLogin from "./admin/Login";
import Dashboard from "./admin/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🌐 PUBLIC SITE */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogDetails />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* 🔐 ADMIN CMS */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminLogin />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
