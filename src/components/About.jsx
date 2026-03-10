import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const RunningCode = () => {
  const [lines, setLines] = useState([
    ">> initializing sasi-dev-environment...",
    ">> loading full-stack-modules...",
    ">> connecting to postgresql...",
    ">> starting fastapi backend...",
    ">> launching react frontend...",
    ">> system ready. happy coding!"
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLines((prev) => {
        const newLines = [...prev];
        const lastLine = newLines.shift();
        newLines.push(lastLine);
        return newLines;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={terminalContainer} className="glass-card">
      <div style={terminalHeader}>
        <div style={dotRed}></div>
        <div style={dotYellow}></div>
        <div style={dotGreen}></div>
        <span style={terminalTitle}>sasi_dev_workspace — bash</span>
      </div>
      <div style={terminalBody}>
        {lines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ 
              color: index === lines.length - 1 ? "#38bdf8" : "#94a3b8",
              marginBottom: "8px",
              fontFamily: "'Fira Code', monospace",
              fontSize: "14px"
            }}
          >
            {line}
          </motion.div>
        ))}
        <span style={cursor}>_</span>
      </div>
    </div>
  );
};

export default function About() {
  return (
    <div style={pageContainer}>
      <div style={contentWrapper} className="about-content-wrapper">
        <div className="stable-2-column-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <RunningCode />
          </motion.div>

          <motion.div
            style={textSection}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={title}>
              Engineering <span style={{ color: "#38bdf8" }}>Seamless</span> Experiences
            </h1>
            <p style={description}>
              I’m <strong>Sasi Kumar M</strong>, a Full Stack Developer with a passion for building 
              high-performance web applications. I specialize in architecting scalable backend APIs 
              and crafting pixel-perfect frontend interfaces.
            </p>

            <div style={statsGrid}>
              <div style={statItem}>
                <h3 style={statNum}>2+</h3>
                <p style={statLabel}>Years Exp</p>
              </div>
              <div style={statItem}>
                <h3 style={statNum}>20+</h3>
                <p style={statLabel}>Projects</p>
              </div>
              <div style={statItem}>
                <h3 style={statNum}>99%</h3>
                <p style={statLabel}>Uptime</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div style={skillsSection}>
          <h2 style={sectionTitle}>Core Development Focus</h2>
          <div style={skillsGrid}>
            {[
              { title: "Frontend Architecture", desc: "React, Next.js, Angular, Tailwind CSS, Responsive UI", icon: "🎨" },
              { title: "Backend Scalability", desc: "Node.js, Express, FastAPI, Python, NestJS", icon: "⚙️" },
              { title: "Cloud & Databases", desc: "AWS, Docker, PostgreSQL, MongoDB, Redis", icon: "☁️" },
              { title: "API Excellence", desc: "REST, GraphQL, WebSockets, OAuth2, JWT", icon: "🔌" }
            ].map((skill, index) => (
              <motion.div
                key={index}
                style={skillCard}
                className="glass-card"
                whileHover={{ y: -10, borderColor: "#38bdf8" }}
              >
                <div style={skillIcon}>{skill.icon}</div>
                <h3 style={skillTitle}>{skill.title}</h3>
                <p style={skillDesc}>{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div style={quoteSection}>
          <motion.div 
            style={quoteCard}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div style={quoteIcon}>“</div>
            <p style={quoteText}>
              Innovation happens when logic meets creativity to deliver a seamless digital experience. 
              My goal is to engineer applications that are not just high-performing, but user-centric and maintainable.
            </p>
            <div style={quoteAuthor}>— Sasi Kumar M</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const pageContainer = {
  paddingTop: "120px",
  minHeight: "100vh",
  background: "transparent",
  padding: "clamp(100px, 12vh, 140px) clamp(10px, 4vw, 40px) 40px clamp(10px, 4vw, 40px)",
};

const contentWrapper = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const terminalContainer = {
  borderRadius: "12px",
  overflow: "hidden",
  height: "300px",
  display: "flex",
  flexDirection: "column",
};

const terminalHeader = {
  padding: "12px",
  background: "rgba(30, 41, 59, 0.8)",
  display: "flex",
  alignItems: "center",
  gap: "8px",
};

const dotRed = { width: "12px", height: "12px", borderRadius: "50%", background: "#ef4444" };
const dotYellow = { width: "12px", height: "12px", borderRadius: "50%", background: "#f59e0b" };
const dotGreen = { width: "12px", height: "12px", borderRadius: "50%", background: "#10b981" };

const terminalTitle = {
  color: "#94a3b8",
  fontSize: "12px",
  marginLeft: "10px",
  fontFamily: "monospace",
};

const terminalBody = {
  flex: 1,
  padding: "20px",
  background: "rgba(15, 23, 42, 0.9)",
  fontFamily: "monospace",
};

const cursor = {
  display: "inline-block",
  width: "8px",
  height: "15px",
  background: "#38bdf8",
  marginLeft: "5px",
  animation: "blink 1s step-end infinite",
};

const textSection = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const title = {
  fontSize: "clamp(2rem, 4vw, 3.5rem)",
  fontWeight: "800",
  marginBottom: "20px",
  lineHeight: "1.1",
};

const description = {
  fontSize: "18px",
  color: "#94a3b8",
  lineHeight: "1.8",
  marginBottom: "30px",
};

const statsGrid = {
  display: "flex",
  gap: "30px",
};

const statItem = {
  textAlign: "left",
};

const statNum = {
  fontSize: "28px",
  fontWeight: "bold",
  color: "#38bdf8",
  marginBottom: "5px",
};

const statLabel = {
  fontSize: "14px",
  color: "#64748b",
  textTransform: "uppercase",
  letterSpacing: "1px",
};

const skillsSection = {
  marginTop: "100px",
};

const sectionTitle = {
  fontSize: "32px",
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: "50px",
};

const skillsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "25px",
};

const skillCard = {
  padding: "30px",
  textAlign: "left",
};

const skillIcon = {
  fontSize: "32px",
  marginBottom: "20px",
};

const skillTitle = {
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "12px",
  color: "#f8fafc",
};

const skillDesc = {
  fontSize: "14px",
  color: "#94a3b8",
  lineHeight: "1.6",
};

const quoteSection = {
  marginTop: "100px",
  display: "flex",
  justifyContent: "center",
};

const quoteCard = {
  maxWidth: "800px",
  textAlign: "center",
  position: "relative",
  padding: "40px",
};

const quoteIcon = {
  fontSize: "80px",
  color: "rgba(56, 189, 248, 0.1)",
  lineHeight: "1",
  marginBottom: "20px",
};

const quoteText = {
  fontSize: "22px",
  fontStyle: "italic",
  color: "#cbd5e1",
  lineHeight: "1.7",
  marginBottom: "20px",
};

const quoteAuthor = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "#38bdf8",
  textTransform: "uppercase",
  letterSpacing: "2px",
};