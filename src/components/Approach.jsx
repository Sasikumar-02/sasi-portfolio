import { FaCode, FaServer, FaCogs } from "react-icons/fa";

export default function Approach() {
  return (
    <div style={pageContainer}>
      <h1 style={title}>
        My <span style={gradientText}>Development Workflow</span>
      </h1>

      <div style={gridContainer}>

        {/* PHASE 1 */}
        <div style={{ ...card, background: phase1 }} className="approach-card glass-card">
          <div style={iconHeader}>
            <span style={numberStyle}>01</span>
            <FaCode style={iconStyle} />
          </div>
          <h2>Architecture & Design</h2>
          <p>
            Beginning every project with robust system design.
            Defining data models, API contracts, and component
            hierarchies to ensure a scalable and maintainable foundation.
          </p>
        </div>

        {/* PHASE 2 */}
        <div style={{ ...card, background: phase2 }} className="approach-card glass-card">
          <div style={iconHeader}>
            <span style={numberStyle}>02</span>
            <FaServer style={iconStyle} />
          </div>
          <h2>Engineering & Implementation</h2>
          <p>
            Writing clean, efficient code across the stack.
            Bridging pixel-perfect frontend interfaces with
            high-performance backend services and secure database layers.
          </p>
        </div>

        {/* PHASE 3 */}
        <div style={{ ...card, background: phase3 }} className="approach-card glass-card">
          <div style={iconHeader}>
            <span style={numberStyle}>03</span>
            <FaCogs style={iconStyle} />
          </div>
          <h2>Optimization & Deployment</h2>
          <p>
            Ensuring high availability through automated CI/CD pipelines,
            dockerization, and rigorous performance testing.
            Continuous monitoring and iterative improvements.
          </p>
        </div>

      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const pageContainer = {
  paddingTop: "120px",
  padding: "120px 40px",
  minHeight: "100vh",
  background: "transparent",
  color: "white"
};

const title = {
  textAlign: "center",
  fontSize: "42px",
  marginBottom: "70px"
};

const gradientText = {
  background: "linear-gradient(90deg, #38bdf8, #a78bfa)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
};

const gridContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "40px"
};

const card = {
  padding: "40px 35px",
  borderRadius: "20px",
  minHeight: "350px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  transition: "all 0.4s ease",
  cursor: "pointer"
};

const iconHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px"
};

const numberStyle = {
  fontSize: "48px",
  fontWeight: "bold",
  opacity: 0.2,
  lineHeight: 1
};

const iconStyle = {
  fontSize: "36px",
  color: "#fff",
  opacity: 0.9
};

const phase1 =
  "linear-gradient(135deg, #1e3a8a, #3b82f6)";

const phase2 =
  "linear-gradient(135deg, #4c1d95, #6366f1)";

const phase3 =
  "linear-gradient(135deg, #0891b2, #0ea5e9)";