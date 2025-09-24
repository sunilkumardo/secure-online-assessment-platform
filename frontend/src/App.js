import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Secure Online Assessment Platform</h1>
        <nav className="mb-4 space-x-4">
          <Link className="text-blue-600 hover:underline" to="/signup">Signup</Link>
          <Link className="text-blue-600 hover:underline" to="/login">Login</Link>
          <Link className="text-blue-600 hover:underline" to="/dashboard">Dashboard</Link>
        </nav>
        <hr className="mb-4" />

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
