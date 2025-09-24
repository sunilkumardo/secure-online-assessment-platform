import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FiLogOut, FiClipboard, FiCheckCircle, FiActivity } from "react-icons/fi";

function Dashboard() {
  const [message, setMessage] = useState("");
  const [user, setUser] = useState({});
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    axios
      .get("http://localhost:5000/api/dashboard", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setMessage(res.data.message);
        setUser(res.data.user || { name: "User" });
        setAssignments(res.data.assignments || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setMessage("Unauthorized ❌");
        navigate("/login");
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (loading) {
    return (
      <div style={styles.loaderContainer}>
        <p style={styles.loaderText}>Loading Dashboard...</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>SecureAssess</h2>
        <nav style={styles.nav}>
          <div style={styles.navItem}><FiClipboard /> &nbsp; My Tests</div>
          <div style={styles.navItem}><FiCheckCircle /> &nbsp; Completed</div>
          <div style={styles.navItem}><FiActivity /> &nbsp; Analytics</div>
        </nav>
        <button onClick={handleLogout} style={styles.logoutBtn}>
          <FiLogOut /> &nbsp; Logout
        </button>
      </div>

      {/* Main Content */}
      <div style={styles.main}>
        <h1 style={styles.greeting}>Welcome, {user.name} 👋</h1>
        <p style={styles.message}>{message}</p>

        <div style={styles.cardsContainer}>
          {assignments.length === 0 ? (
            <p style={{ color: "#555" }}>No active assignments right now.</p>
          ) : (
            assignments.map((assignment, idx) => (
              <div key={idx} style={styles.card}>
                <h3 style={styles.cardTitle}>{assignment.title}</h3>
                <p style={styles.cardSubtitle}>Due: {assignment.dueDate}</p>
                <p style={styles.cardDesc}>{assignment.description}</p>
                <button style={styles.cardBtn}>Start Test</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: "#f5f6fa",
  },
  sidebar: {
    width: "220px",
    background: "#2f3640",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    padding: "2rem 1rem",
    justifyContent: "space-between",
  },
  logo: {
    fontSize: "1.6rem",
    fontWeight: "bold",
    marginBottom: "2rem",
    textAlign: "center",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
    fontSize: "1rem",
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.2s",
  },
  logoutBtn: {
    background: "#e84118",
    border: "none",
    padding: "0.7rem 1rem",
    borderRadius: "8px",
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "2rem",
  },
  main: {
    flex: 1,
    padding: "2rem 3rem",
    overflowY: "auto",
  },
  greeting: {
    fontSize: "2rem",
    marginBottom: "0.5rem",
  },
  message: {
    color: "#666",
    marginBottom: "2rem",
  },
  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "1.5rem",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "transform 0.2s",
  },
  cardTitle: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  cardSubtitle: {
    fontSize: "0.85rem",
    color: "#999",
    marginBottom: "0.8rem",
  },
  cardDesc: {
    flex: 1,
    fontSize: "0.9rem",
    color: "#555",
    marginBottom: "1rem",
  },
  cardBtn: {
    padding: "0.6rem",
    border: "none",
    borderRadius: "8px",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.2s",
  },
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  loaderText: {
    fontSize: "1.2rem",
    color: "#333",
  },
};

export default Dashboard;
