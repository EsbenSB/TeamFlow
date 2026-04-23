import { Link } from "react-router-dom";

export default function Navbar() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div style={{ padding: 10, borderBottom: "1px solid #ccc" }}>
      <Link to="/">Dashboard</Link>
      <button onClick={logout} style={{ marginLeft: 10 }}>
        Logout
      </button>
    </div>
  );
}
