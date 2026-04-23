import { useState } from "react";
import api from "../api/client";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await api.post("/auth/register", {
        email,
        password,
      });

      alert("User created! You can now login.");
      window.location.href = "/login";
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 20 }}>
      <h2>Register</h2>

      <input
        style={{
          padding: "8px",
          marginRight: "10px",
          border: "1px solid #ccc",
        }}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        style={{
          padding: "8px",
          marginRight: "10px",
          border: "1px solid #ccc",
        }}
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button style={{ padding: "8px 12px" }} onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}
