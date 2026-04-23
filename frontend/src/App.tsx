import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Dashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Workspace from "./pages/Workspace";
import Board from "./pages/Board";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/workspace/:id" element={<Workspace />} />
        <Route path="/board/:id" element={<Board />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
