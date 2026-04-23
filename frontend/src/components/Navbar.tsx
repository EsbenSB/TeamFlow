import { Link } from "react-router-dom";

export default function Navbar() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div
      style={{
        padding: "10px 20px",
        borderBottom: "1px solid #eee",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link to="/">TeamFlow</Link>

      <button style={{ padding: "8px 12px" }} onClick={logout}>
        Logout
      </button>
    </div>
  );
}
