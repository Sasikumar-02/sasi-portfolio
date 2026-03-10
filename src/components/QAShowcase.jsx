import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
    FaReact, FaNodeJs, FaAws, FaTerminal, FaServer,
    FaDatabase, FaMicrochip, FaShieldAlt, FaExternalLinkAlt
} from "react-icons/fa";
import {
    SiNextdotjs, SiFastapi, SiPostgresql, SiTailwindcss,
    SiJavascript, SiPython, SiDocker, SiKubernetes
} from "react-icons/si";

const SystemLogs = () => {
    const [logs, setLogs] = useState([
        { id: 1, type: "info", text: "Initializing Cloud Console v2.6.0..." },
        { id: 2, type: "success", text: "Verified Identity Node: [LIVE]" },
        { id: 3, type: "info", text: "Scanning Micro-frontend fragments..." }
    ]);
    const terminalBodyRef = useRef(null);

    const logPool = [
        "Incoming request: /api/v1/sync/inventory",
        "Cache hit: redis://cluster-node-3",
        "Auth handshake: JWT Signature Valid",
        "Optimizing PostgreSQL query execution plan...",
        "VAPT scan complete: 0 vulnerabilities found",
        "Microservice 'Inventory-Sync' healthy",
        "Scaling cluster: Adding node 'AWS-EC2-X4'",
        "WebSocket connected: user_4921",
        "Database migration: 2026_03_10_init applied"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            const randomLog = logPool[Math.floor(Math.random() * logPool.length)];
            setLogs(prev => {
                const newLog = {
                    id: Date.now(),
                    type: Math.random() > 0.8 ? "success" : "info",
                    text: `[${new Date().toLocaleTimeString()}] ${randomLog}`
                };
                const updated = [...prev, newLog];
                return updated.length > 8 ? updated.slice(1) : updated;
            });
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (terminalBodyRef.current) {
            terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
        }
    }, [logs]);

    return (
        <div style={terminalShell} className="glass-card">
            <div style={terminalHeader}>
                <div style={dotRed}></div>
                <div style={dotYellow}></div>
                <div style={dotGreen}></div>
                <span style={terminalTitle}>cloud_console — live_logs</span>
            </div>
            <div
                ref={terminalBodyRef}
                style={{ ...terminalBody, overflowY: "auto" }}
            >
                <AnimatePresence initial={false}>
                    {logs.map((log) => (
                        <motion.div
                            key={log.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            style={{
                                color: log.type === "success" ? "#4ade80" : "#94a3b8",
                                fontSize: "13px",
                                fontFamily: "'Fira Code', monospace",
                                marginBottom: "5px"
                            }}
                        >
                            <span style={{ color: "#38bdf8", marginRight: "8px" }}>$</span>
                            {log.text}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default function TechnicalShowcase() {
    return (
        <div style={pageContainer}>
            <motion.h1
                style={mainTitle}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Engineering <span style={{ color: "#38bdf8" }}>Cloud Console</span>
            </motion.h1>

            <div style={introSection}>
                <motion.div
                    style={introText}
                    className="premium-glass"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    A real-time overview of system architecture, API health, and performance engineering benchmarks.
                    This console showcases the technical infrastructure powering modern digital ecosystems.
                </motion.div>
            </div>

            {/* LIVE CONSOLE LOGS */}
            <div style={cardWrapper}>
                <div style={tagStyle}>Live Console Output</div>
                <SystemLogs />
            </div>

            {/* Dev Performance Dashboard */}
            <div style={{ ...tagStyle, marginTop: "60px" }}>System Health & Performance</div>
            <div style={dashboardGrid}>
                {[
                    { val: "15+", label: "Microservices", color: "#3b82f6", icon: <FaMicrochip /> },
                    { val: "99.8%", label: "System Uptime", color: "#10b981", icon: <FaServer /> },
                    { val: "140ms", label: "Avg p99 Latency", color: "#f59e0b", icon: <FaTerminal /> },
                    { val: "2.4M", label: "Monthly Requests", color: "#a855f7", icon: <FaExternalLinkAlt /> }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        className="glass-card"
                        style={{ ...dashboardCardBase, borderBottom: `2px solid ${item.color}` }}
                        whileHover={{ y: -5, boxShadow: `0 10px 30px ${item.color}33` }}
                    >
                        <div style={{ ...dashboardNumber, color: item.color }}>
                            <span style={{ fontSize: "20px", verticalAlign: "middle", marginRight: "10px", opacity: 0.8 }}>{item.icon}</span>
                            {item.val}
                        </div>
                        <div style={dashboardLabel}>{item.label}</div>
                    </motion.div>
                ))}
            </div>

            <div style={cardWrapper}>
                <div style={tagStyle} className="premium-glow-card">
                    Sample System Documentation
                </div>

                <motion.div
                    style={bugCard}
                    className="premium-glow-card"
                    whileHover={{ scale: 1.01, boxShadow: "0 0 35px rgba(59, 130, 246, 0.2), 0 15px 35px rgba(0,0,0,0.3)", borderColor: "rgba(59, 130, 246, 0.35)" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    {/* Header Section */}
                    <div style={cardHeader}>
                        <div>
                            <span style={bugId}>System ID: ARCH-2026-X1</span>
                            <h2 style={bugTitle}>Real-time Inventory Sync Engine</h2>
                            <p style={environmentText}><FaAws style={{ color: "#f59e0b" }} /> Infrastructure: AWS Lambda | Redis | PostgreSQL</p>
                            <p style={{ ...environmentText, marginTop: "4px" }}><FaDatabase style={{ color: "#38bdf8" }} /> Pattern: Event-Driven Architecture</p>
                            <p style={{ ...environmentText, marginTop: "4px" }}><FaShieldAlt style={{ color: "#10b981" }} /> Status: Production Ready</p>
                        </div>
                        <div style={badgesContainer}>
                            <span style={{ ...badgeBase, background: "rgba(239, 68, 68, 0.2)", color: "#fca5a5", border: "1px solid rgba(239, 68, 68, 0.5)" }}>Resilient</span>
                            <span style={{ ...badgeBase, background: "rgba(249, 115, 22, 0.2)", color: "#fdba74", border: "1px solid rgba(249, 115, 22, 0.5)" }}>High Load</span>
                            <span style={{ ...badgeBase, background: "rgba(59, 130, 246, 0.2)", color: "#93c5fd", border: "1px solid rgba(59, 130, 246, 0.5)" }}>Scalable</span>
                        </div>
                    </div>

                    <hr style={divider} />

                    <div style={detailsGrid}>
                        <div style={detailColumn}>
                            <h3 style={sectionTitle}>System Overview</h3>
                            <p style={paragraphText}>
                                A robust synchronization engine designed to handle high-concurrency inventory updates across multiple retail nodes. It utilizes an event-driven approach with AWS SNS/SQS to ensure data consistency.
                            </p>
                        </div>

                        <div style={detailColumn}>
                            <div style={resultBox}>
                                <h3 style={{ ...sectionTitle, color: "#4ade80" }}>Performance Benchmark</h3>
                                <p style={paragraphText}>
                                    Successfully processed 1M+ transactions per day with zero data loss.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div style={sectionDivider} />

            {/* Development Stack Section */}
            <h1 style={{ ...mainTitle, marginTop: "20px" }}>Development Stack</h1>

            <div style={introSection}>
                <motion.div
                    style={introText}
                    whileHover={{ scale: 1.02, boxShadow: "0 15px 35px rgba(0,0,0,0.35)" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    Core technologies leveraged to build scalable, high-performing applications with robust security and efficiency.
                </motion.div>
            </div>

            <div style={toolsGrid}>
                {[
                    { name: "React.js", tag: "Frontend Library", icon: <FaReact />, color: "#61dafb", desc: "Building interactive and component-driven user interfaces." },
                    { name: "Next.js", tag: "React Framework", icon: <SiNextdotjs />, color: "#ffffff", desc: "Enabling SSR/SSG for SEO and performance optimization." },
                    { name: "Node.js", tag: "JS Runtime", icon: <FaNodeJs />, color: "#339933", desc: "Powering scalable server-side JavaScript applications." },
                    { name: "FastAPI", tag: "Python Framework", icon: <SiFastapi />, color: "#009688", desc: "High-performance asynchronous Python API development." },
                    { name: "PostgreSQL", tag: "Relational DB", icon: <SiPostgresql />, color: "#4169e1", desc: "Advanced database for handling complex data relationships." },
                    { name: "AWS", tag: "Cloud Services", icon: <FaAws />, color: "#ff9900", desc: "Scaling and deploying applications globally." }
                ].map((tool, index) => (
                    <motion.div
                        key={index}
                        style={toolCard}
                        className="premium-glow-card"
                        whileHover={{ y: -8, boxShadow: "0 0 30px rgba(59, 130, 246, 0.25), 0 15px 35px rgba(0, 0, 0, 0.3)", borderColor: "rgba(59, 130, 246, 0.45)" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <div style={{ ...toolIconContainer, color: tool.color, fontSize: "40px" }}>
                            {tool.icon}
                        </div>
                        <h3 style={toolName}>{tool.name}</h3>
                        <span style={toolBadge}>{tool.tag}</span>
                        <p style={toolDescription}>{tool.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

/* ================= STYLES ================= */

const terminalShell = {
    width: "100%",
    borderRadius: "12px",
    overflow: "hidden",
    height: "250px",
    display: "flex",
    flexDirection: "column",
    marginTop: "15px"
};

const terminalHeader = {
    padding: "10px 15px",
    background: "rgba(30, 41, 59, 0.9)",
    display: "flex",
    alignItems: "center",
    gap: "8px"
};

const dotRed = { width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444" };
const dotYellow = { width: "10px", height: "10px", borderRadius: "50%", background: "#f59e0b" };
const dotGreen = { width: "10px", height: "10px", borderRadius: "50%", background: "#10b981" };

const terminalTitle = {
    color: "#94a3b8",
    fontSize: "11px",
    marginLeft: "5px",
    fontFamily: "monospace",
    textTransform: "uppercase",
    letterSpacing: "1px"
};

const terminalBody = {
    flex: 1,
    padding: "15px",
    background: "rgba(15, 23, 42, 0.95)",
    overflowY: "auto"
};

const pageContainer = {
    paddingTop: "120px",
    background: "transparent",
    padding: "120px 40px 60px 40px",
    minHeight: "100vh",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
};

const mainTitle = {
    fontSize: "clamp(2rem, 5vw, 42px)",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "10px",
    background: "linear-gradient(90deg, #60a5fa, #a855f7, #ec4899)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
};

const introSection = {
    maxWidth: "800px",
    textAlign: "center",
    marginBottom: "50px"
};

const introText = {
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#cbd5e1",
    background: "rgba(255, 255, 255, 0.05)",
    padding: "25px",
    borderRadius: "15px",
    border: "1px solid rgba(255, 255, 255, 0.1)"
};

const sectionDivider = {
    width: "100%",
    maxWidth: "1200px",
    height: "1px",
    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
    margin: "80px auto 40px auto",
    opacity: 0.8
};

const dashboardGrid = {
    display: "flex",
    gap: "20px",
    width: "100%",
    maxWidth: "900px",
    marginBottom: "50px",
    flexWrap: "wrap",
    justifyContent: "center"
};

const dashboardCardBase = {
    background: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "16px",
    padding: "20px 30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "160px",
    flex: "1 1 160px",
    textAlign: "center"
};

const dashboardNumber = {
    fontSize: "clamp(24px, 3vw, 32px)",
    fontWeight: "bold",
    marginBottom: "5px"
};

const dashboardLabel = {
    fontSize: "12px",
    color: "#94a3b8",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    fontWeight: "600"
};

const cardWrapper = {
    width: "100%",
    maxWidth: "900px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative"
};

const tagStyle = {
    background: "#3b82f6",
    color: "white",
    padding: "6px 16px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "bold",
    letterSpacing: "1px",
    marginBottom: "-15px",
    zIndex: 10,
    textTransform: "uppercase",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)"
};

const bugCard = {
    background: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "20px",
    padding: "40px",
    width: "100%",
};

const cardHeader = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: "20px",
    marginBottom: "25px"
};

const bugId = {
    fontSize: "12px",
    color: "#94a3b8",
    fontFamily: "monospace",
    letterSpacing: "1px"
};

const bugTitle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginTop: "5px",
    color: "#f8fafc"
};

const environmentText = {
    fontSize: "14px",
    color: "#94a3b8",
    marginTop: "8px",
    display: "flex",
    alignItems: "center",
    gap: "10px"
};

const badgesContainer = { display: "flex", gap: "10px", flexWrap: "wrap" };
const badgeBase = { padding: "6px 14px", borderRadius: "8px", fontSize: "12px", fontWeight: "600" };
const divider = { border: "none", height: "1px", background: "rgba(255, 255, 255, 0.1)", margin: "30px 0" };
const detailsGrid = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" };
const detailColumn = { display: "flex", flexDirection: "column", gap: "25px" };
const sectionTitle = { fontSize: "16px", fontWeight: "600", color: "#e2e8f0", marginBottom: "8px" };
const paragraphText = { fontSize: "14px", lineHeight: "1.6", color: "#cbd5e1" };
const resultBox = { background: "rgba(255, 255, 255, 0.05)", padding: "15px 20px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.1)" };

const toolsGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
    width: "100%",
    maxWidth: "1200px",
    padding: "20px",
    marginBottom: "80px"
};

const toolCard = {
    background: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "20px",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
};

const toolIconContainer = {
    width: "80px",
    height: "80px",
    background: "rgba(255, 255, 255, 0.05)",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
    border: "1px solid rgba(255, 255, 255, 0.1)"
};

const toolName = { fontSize: "20px", fontWeight: "bold", color: "#f8fafc", marginBottom: "5px" };
const toolBadge = { background: "rgba(59, 130, 246, 0.1)", color: "#93c5fd", padding: "4px 10px", borderRadius: "6px", fontSize: "11px", fontWeight: "bold", textTransform: "uppercase", marginBottom: "12px" };
const toolDescription = { fontSize: "14px", lineHeight: "1.5", color: "#94a3b8", margin: 0 };
