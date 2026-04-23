import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Workspace from "./pages/Workspace";
import Board from "./pages/Board";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/workspace/:id" element={<Workspace />} />
        <Route path="/board/:id" element={<Board />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
