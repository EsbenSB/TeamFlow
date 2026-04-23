import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/client";
import Navbar from "../components/Navbar";

type Task = {
  id: string;
  title: string;
  status: string;
};

export default function Board() {
  const { id } = useParams();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const res = await api.get(`/tasks/${id}`);
        setTasks(res.data);
      } catch {
        alert("Error loading tasks");
      } finally {
        setLoading(false);
      }
    };

    if (id) loadTasks();
  }, [id]);

  const createTask = async () => {
    if (!title) return;

    await api.post("/tasks", {
      title,
      description: "",
      boardId: id,
    });

    setTitle("");

    const res = await api.get(`/tasks/${id}`);
    setTasks(res.data);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <Navbar />
      <h2>Tasks</h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task"
      />
      <button onClick={createTask}>Create</button>

      {tasks.length === 0 ? (
        <p style={{ opacity: 0.6 }}>No tasks yet — create your first one</p>
      ) : (
        <ul>
          {tasks.map((t) => (
            <li key={t.id}>
              {t.title} ({t.status})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
