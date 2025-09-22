import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <div style={{ padding: "2rem" }}>
        <h1>Secure Online Assessment Platform</h1>
        <nav>
          <Link to="/signup">Signup</Link> |{" "}
          <Link to="/login">Login</Link> |{" "}
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <hr />

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
