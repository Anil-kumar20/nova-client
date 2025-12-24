import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin");
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          to="/admin/projects"
          className="card hover:bg-indigo-50"
        >
          <h2 className="font-semibold text-lg">Manage Projects</h2>
          <p>Add, edit and delete projects</p>
        </Link>

        <Link
          to="/admin/blogs"
          className="card hover:bg-pink-50"
        >
          <h2 className="font-semibold text-lg">Manage Blogs</h2>
          <p>Add, edit and publish blogs</p>
        </Link>
      </div>
    </div>
  );
}
