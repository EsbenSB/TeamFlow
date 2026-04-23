import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../api/client";
import Navbar from "../components/Navbar";

type Board = {
  id: string;
  name: string;
};

export default function Workspace() {
  const { id } = useParams();
  const [boards, setBoards] = useState<Board[]>([]);
  const [name, setName] = useState("");

  const fetchBoards = async () => {
    const res = await api.get(`/boards/${id}`);
    setBoards(res.data);
  };

  const createBoard = async () => {
    if (!name) return;

    await api.post("/boards", {
      name,
      workspaceId: id,
    });

    setName("");
    fetchBoards();
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBoards = async () => {
      try {
        const res = await api.get(`/boards/${id}`);
        setBoards(res.data);
      } catch {
        alert("Error loading boards");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadBoards();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 20 }}>
      <Navbar />
      <h2>Boards</h2>

      <input
        style={{
          padding: "8px",
          marginRight: "10px",
          border: "1px solid #ccc",
        }}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="New board"
      />
      <button style={{ padding: "8px 12px" }} onClick={createBoard}>
        Create
      </button>

      {boards.length === 0 ? (
        <p style={{ opacity: 0.6 }}>No boards yet — create your first one </p>
      ) : (
        <ul>
          {boards.map((b) => (
            <li key={b.id}>
              <Link to={`/board/${b.id}`}>{b.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
