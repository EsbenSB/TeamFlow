import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/client";
import Navbar from "../components/Navbar";

type Workspace = {
  id: string;
  name: string;
};

export default function Home() {
  const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
  const [name, setName] = useState("");

  const fetchWorkspaces = async () => {
    try {
      const res = await api.get("/workspaces");
      setWorkspaces(res.data);
    } catch {
      alert("Not authenticated");
      window.location.href = "/login";
    }
  };

  const createWorkspace = async () => {
    if (!name) return;

    await api.post("/workspaces", { name });
    setName("");
    fetchWorkspaces();
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await api.get("/workspaces");
        setWorkspaces(res.data);
      } catch {
        window.location.href = "/login";
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 20 }}>
      <Navbar />
      <h2>Dashboard</h2>

      <h3>Create Workspace</h3>
      <input
        style={{
          padding: "8px",
          marginRight: "10px",
          border: "1px solid #ccc",
        }}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Workspace name"
      />
      <button style={{ padding: "8px 12px" }} onClick={createWorkspace}>
        Create
      </button>

      <h3>Your Workspaces</h3>

      {workspaces.length === 0 ? (
        <p style={{ opacity: 0.6 }}>
          No workspaces yet — create your first one
        </p>
      ) : (
        <ul>
          {workspaces.map((w) => (
            <li key={w.id}>
              <Link to={`/workspace/${w.id}`}>{w.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
