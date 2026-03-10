import { motion } from "framer-motion";

export default function TechnicalShowcase() {
    return (
        <div style={pageContainer}>
            <h1 style={mainTitle}>Engineering <span style={{ color: "#38bdf8" }}>Cloud Console</span></h1>

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

            {/* Dev Performance Dashboard */}
            <div style={tagStyle}>System Health & Performance</div>
            <div style={dashboardGrid}>
                {[
                    { val: "15+", label: "Microservices", color: "#3b82f6" },
                    { val: "99.8%", label: "System Uptime", color: "#10b981" },
                    { val: "140ms", label: "Avg p99 Latency", color: "#f59e0b" },
                    { val: "2.4M", label: "Monthly Requests", color: "#a855f7" }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        className="glass-card"
                        style={{ ...dashboardCardBase, borderBottom: `2px solid ${item.color}` }}
                        whileHover={{ y: -5, boxShadow: `0 10px 30px ${item.color}33` }}
                    >
                        <div style={{ ...dashboardNumber, color: item.color }}>{item.val}</div>
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
                            <p style={environmentText}>Infrastructure: AWS Lambda | Redis | PostgreSQL</p>
                            <p style={{ ...environmentText, marginTop: "4px" }}>Pattern: Event-Driven Architecture</p>
                            <p style={{ ...environmentText, marginTop: "4px" }}>Tech Lead: Sasi Kumar M</p>
                            <p style={{ ...environmentText, marginTop: "4px" }}>Status: Production Ready</p>
                        </div>
                        <div style={badgesContainer}>
                            <span style={{ ...badgeBase, background: "rgba(239, 68, 68, 0.2)", color: "#fca5a5", border: "1px solid rgba(239, 68, 68, 0.5)" }}>Resilient</span>
                            <span style={{ ...badgeBase, background: "rgba(249, 115, 22, 0.2)", color: "#fdba74", border: "1px solid rgba(249, 115, 22, 0.5)" }}>High Load</span>
                            <span style={{ ...badgeBase, background: "rgba(59, 130, 246, 0.2)", color: "#93c5fd", border: "1px solid rgba(59, 130, 246, 0.5)" }}>Scalable</span>
                        </div>
                    </div>

                    <hr style={divider} />

                    {/* Details Section */}
                    <div style={detailsGrid}>
                        <div style={detailColumn}>
                            <h3 style={sectionTitle}>System Overview</h3>
                            <p style={paragraphText}>
                                A robust synchronization engine designed to handle high-concurrency inventory updates across multiple retail nodes. It utilizes an event-driven approach with AWS SNS/SQS to ensure data consistency and real-time processing.
                            </p>

                            <h3 style={sectionTitle}>Core Components</h3>
                            <ol style={orderedList}>
                                <li style={listItem}>Event Producer: capturing ERP changes</li>
                                <li style={listItem}>Message Queue: handling asynchronous bursts</li>
                                <li style={listItem}>Sync Worker: batch processing inventory logic</li>
                            </ol>
                        </div>

                        <div style={detailColumn}>
                            <div style={resultBox}>
                                <h3 style={{ ...sectionTitle, color: "#4ade80" }}>Performance Benchmark</h3>
                                <p style={paragraphText}>
                                    Successfully processed 1M+ transactions per day with zero data loss.
                                </p>
                            </div>

                            <div style={resultBox}>
                                <h3 style={{ ...sectionTitle, color: "#f87171" }}>Error Handling</h3>
                                <p style={paragraphText}>
                                    Implemented Dead Letter Queues (DLQ) for automatic retry logic.
                                </p>
                            </div>


                            <div style={{ ...resultBox, background: "transparent", border: "none", paddingLeft: 0 }}>
                                <h3 style={{ ...sectionTitle, color: "#60a5fa" }}>Architecture Diagram</h3>
                                <p style={paragraphText}>
                                    <a href="#" onClick={(e) => e.preventDefault()} style={linkStyle}>🔗 infrastructure_diagram_v2.pdf</a>
                                </p>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Section Divider */}
            <div style={sectionDivider} />

            {/* API Endpoint Showcase Section */}
            <h1 style={{ ...mainTitle, marginTop: "20px" }}>API Endpoint Showcase</h1>

            <div style={introSection}>
                <motion.div
                    style={introText}
                    whileHover={{ scale: 1.02, boxShadow: "0 15px 35px rgba(0,0,0,0.35)" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    This section showcases well-documented RESTful API endpoints. It includes request parameters, response structures, and authorization requirements, demonstrating a commitment to clean and developer-friendly API design.
                </motion.div>
            </div>

            <div style={{ width: "100%", maxWidth: "1600px", display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>

                {/* Execution Details & Stats */}
                <div style={tagStyle} className="premium-glow-card">API Health Status Summary</div>
                <motion.div
                    style={executionSummaryContainer}
                    className="premium-glow-card"
                    whileHover={{ scale: 1.01, boxShadow: "0 0 35px rgba(59, 130, 246, 0.2), 0 15px 35px rgba(0,0,0,0.3)", borderColor: "rgba(59, 130, 246, 0.35)" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <div style={executionDetails}>
                        <p style={detailText}><strong>Last Build :</strong> 10 Mar 2026</p>
                        <p style={detailText}><strong>Lead Developer :</strong> Sasi Kumar M</p>
                        <p style={detailText}><strong>Deployment :</strong> AWS EKS (Kubernetes)</p>
                    </div>

                    <div style={executionDetails}>
                        <p style={{ ...detailText, color: "#60a5fa" }}><strong>Total Services :</strong> 8</p>
                        <p style={{ ...detailText, color: "#4ade80" }}><strong>Healthy :</strong> 8</p>
                        <p style={{ ...detailText, color: "#f87171" }}><strong>Degraded :</strong> 0</p>
                        <p style={{ ...detailText, color: "#fb923c" }}><strong>Down :</strong> 0</p>
                        <p style={detailText}><strong>Uptime :</strong> 99.9%</p>
                    </div>
                </motion.div>

                <div style={tagStyle}>Active Infrastructure Components</div>
                <motion.div
                    style={tableContainer}
                    className="glass-card"
                >
                    <table style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={thStyle}>Service</th>
                                <th style={thStyle}>Type</th>
                                <th style={thStyle}>Stack</th>
                                <th style={thStyle}>SLA</th>
                                <th style={thStyle}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { name: "Identity Node", type: "Auth / Security", stack: "Node.js, Redis", sla: "99.99%", status: "Live" },
                                { name: "Data Sync Engine", type: "Event Processing", stack: "Python, SQS", sla: "99.95%", status: "Live" },
                                { name: "Edge Router", type: "Traffic Management", stack: "Go, Nginx", sla: "99.99%", status: "Stable" },
                                { name: "Analytics Pipe", type: "Big Data", stack: "Kafka, Spark", sla: "99.90%", status: "Deploying" }
                            ].map((row, index) => (
                                <tr key={index} style={tdRowStyle}>
                                    <td style={tdStyle}>{row.name}</td>
                                    <td style={tdStyle}>{row.type}</td>
                                    <td style={tdStyle}>{row.stack}</td>
                                    <td style={tdStyle}>{row.sla}</td>
                                    <td style={{ ...tdStyle, color: row.status === "Live" || row.status === "Stable" ? "#4ade80" : "#f59e0b" }}>
                                        ● {row.status}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>

            {/* Section Divider */}
            <div style={sectionDivider} />

            {/* Development Stack Section */}
            <h1 style={{ ...mainTitle, marginTop: "20px" }}>Development Stack</h1>

            <div style={introSection}>
                <motion.div
                    style={introText}
                    whileHover={{ scale: 1.02, boxShadow: "0 15px 35px rgba(0,0,0,0.35)" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    This section highlights the core technologies and frameworks I leverage to build scalable, high-performing applications. From frontend libraries to cloud infrastructure, these tools power my full-stack workflow.
                </motion.div>
            </div>

            <div style={toolsGrid}>
                {[
                    { name: "React.js", tag: "Frontend Library", src: "/assets/logos/react.png", fit: "contain", desc: "Building interactive and component-driven user interfaces." },
                    { name: "Next.js", tag: "React Framework", src: "/assets/logos/nextjs.png", fit: "contain", desc: "Enabling server-side rendering and static site generation for SEO and speed." },
                    { name: "Node.js", tag: "JS Runtime", src: "/assets/logos/nodejs.png", fit: "contain", desc: "Powering scalable and efficient server-side JavaScript applications." },
                    { name: "FastAPI", tag: "Python Framework", src: "/assets/logos/fastapi.png", fit: "contain", desc: "Modern, high-performance web framework for building APIs with Python." },
                    { name: "PostgreSQL", tag: "Relational DB", src: "/assets/logos/postgres.png", fit: "contain", desc: "Advanced open-source database for handling complex data relationships." },
                    { name: "AWS", tag: "Cloud Infrastructure", src: "/assets/logos/aws.png", fit: "contain", desc: "Scaling and deploying applications globally with reliable cloud services." }
                ].map((tool, index) => (
                    <motion.div
                        key={index}
                        style={toolCard}
                        className="premium-glow-card"
                        whileHover={{ y: -8, boxShadow: "0 0 30px rgba(59, 130, 246, 0.25), 0 15px 35px rgba(0, 0, 0, 0.3)", borderColor: "rgba(59, 130, 246, 0.45)" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <div style={toolIconContainer}>
                            {tool.src ? (
                                <img
                                    src={tool.src}
                                    alt={tool.name}
                                    style={{
                                        width: tool.fit === "contain" ? "80%" : "100%",
                                        height: tool.fit === "contain" ? "80%" : "100%",
                                        objectFit: tool.fit || "cover"
                                    }}
                                />
                            ) : (
                                <span style={{ fontSize: "32px" }}>{tool.icon}</span>
                            )}
                        </div>
                        <h3 style={toolName}>{tool.name}</h3>
                        {tool.tag && <span style={toolBadge}>{tool.tag}</span>}
                        <p style={toolDescription}>{tool.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

/* ================= STYLES ================= */

const pageContainer = {
    paddingTop: "120px",
    background: "#0f172a",
    padding: "120px 40px 60px 40px",
    minHeight: "100vh",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
};

const mainTitle = {
    fontSize: "42px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "10px",
    background: "linear-gradient(90deg, #60a5fa, #a855f7, #ec4899)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0px 2px 10px rgba(0,0,0,0.2)"
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
    minWidth: "140px",
    flex: "1 1 140px",
    textAlign: "center"
};

const dashboardNumber = {
    fontSize: "38px",
    fontWeight: "bold",
    marginBottom: "5px"
};

const dashboardLabel = {
    fontSize: "14px",
    color: "#94a3b8",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    fontWeight: "600",
    textAlign: "center"
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
    fontSize: "14px",
    fontWeight: "bold",
    letterSpacing: "0.5px",
    marginBottom: "-15px", // Overlaps the card slightly
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
    position: "relative"
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
    fontSize: "14px",
    color: "#94a3b8",
    fontFamily: "monospace",
    letterSpacing: "1px"
};

const bugTitle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginTop: "5px",
    color: "#f8fafc"
};

const environmentText = {
    fontSize: "14px",
    color: "#94a3b8",
    marginTop: "8px",
    fontWeight: "500",
    letterSpacing: "0.5px"
};

const badgesContainer = {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap"
};

const badgeBase = {
    padding: "6px 14px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "600",
    letterSpacing: "0.5px"
};

const divider = {
    border: "none",
    height: "1px",
    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
    margin: "30px 0"
};

const detailsGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "clamp(20px, 4vw, 40px)"
};

const detailColumn = {
    display: "flex",
    flexDirection: "column",
    gap: "25px"
};

const sectionTitle = {
    fontSize: "18px",
    fontWeight: "600",
    color: "#e2e8f0",
    marginBottom: "10px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    paddingBottom: "8px"
};

const paragraphText = {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#cbd5e1"
};

const orderedList = {
    margin: 0,
    paddingLeft: "25px",
    color: "#cbd5e1"
};

const listItem = {
    fontSize: "16px",
    marginBottom: "10px",
    lineHeight: "1.5"
};

const resultBox = {
    background: "rgba(255, 255, 255, 0.05)",
    padding: "15px 20px",
    borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.1)"
};

const linkStyle = {
    color: "#60a5fa",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px"
};

const tableContainer = {
    background: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "20px",
    padding: "30px",
    overflowX: "auto"
};

const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "1500px" // ensures it doesn't get too squished
};

const thStyle = {
    padding: "12px 15px",
    textAlign: "left",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    color: "#94a3b8",
    fontWeight: "bold",
    fontSize: "14px",
    textTransform: "uppercase"
};

const tdRowStyle = {
    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
    cursor: "default"
};

const tdStyle = {
    padding: "15px",
    color: "#cbd5e1",
    fontSize: "14px",
    verticalAlign: "top",
    lineHeight: "1.5"
};

const executionSummaryContainer = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
    padding: "20px 30px",
    background: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "15px",
    marginBottom: "20px",
    gap: "20px"
};

const executionDetails = {
    display: "flex",
    flexDirection: "column",
    gap: "8px"
};

const detailText = {
    margin: 0,
    fontSize: "15px",
    color: "#cbd5e1",
    fontFamily: "monospace"
};

const toolsGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
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
    textAlign: "center",
    cursor: "default"
};

const toolIconContainer = {
    width: "90px",
    height: "90px",
    background: "rgba(255, 255, 255, 0.08)",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
    border: "1px solid rgba(255, 255, 255, 0.15)",
    overflow: "hidden"
};

const toolName = {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#f8fafc",
    marginBottom: "8px",
    textAlign: "center",
    width: "100%"
};

const toolBadge = {
    display: "inline-block",
    background: "rgba(59, 130, 246, 0.15)",
    color: "#93c5fd",
    padding: "4px 10px",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    border: "1px solid rgba(59, 130, 246, 0.3)",
    marginBottom: "15px"
};

const toolDescription = {
    fontSize: "15px",
    lineHeight: "1.6",
    color: "#94a3b8",
    margin: 0,
    textAlign: "center"
};
