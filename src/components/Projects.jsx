import { useState } from "react";
import { createPortal } from "react-dom";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [clickOrigin, setClickOrigin] = useState({ rect: null, type: 'pro' });

  const handleProjectClick = (e, project, type) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setClickOrigin({ rect, type });
    setSelectedProject(project);
  };

  const projects = [
    {
      title: "APSS – Aircraft Protection Security Services",
      domain: "Aviation Security Management",
      image: "/apss.jpg",
      points: [
        "Developed full-stack modules for aviation security management, implementing complex business logic and real-time monitoring features.",
        "Architected scalable backend microservices using Node.js and Express, ensuring high availability and low latency for critical security operations.",
        "Integrated secure authentication systems and role-based access control (RBAC) to protect sensitive aviation data.",
        "Designed and implemented responsive frontend dashboards using React to visualize security metrics and flight alerts."
      ]
    },
    {
      title: "MAGP – Malaysia Airports Group Procurement",
      domain: "Centralized Procurement System",
      image: "/clm.jpg",
      points: [
        "Built a centralized procurement system from scratch, automating complex approval workflows and vendor management processes.",
        "Developed dynamic frontend interfaces using Next.js and Tailwind CSS, improving user engagement and streamlining procurement tasks.",
        "Designed and optimized relational database schemas in PostgreSQL to handle high volumes of transaction data.",
        "Implemented RESTful API endpoints and integrated third-party payment gateways for seamless financial operations.",
        "Leveraged Docker for containerization, ensuring consistent development and production environments."
      ]
    },
    {
      title: "SPA – Single Paper Approval",
      domain: "Digital Workflow Management",
      image: "/magp.jpg",
      points: [
        "Architected and developed a digital workflow management system, digitizing paper-based approval processes for large-scale organizations.",
        "Built robust backend services using FastAPI and Python, handling complex document versioning and signature workflows.",
        "Developed interactive frontend components using Angular, providing a smooth and responsive user experience.",
        "Implemented secure file storage solutions and integrated cloud-based document sharing services.",
        "Optimized database queries and implemented caching strategies to improve system performance under heavy load."
      ]
    },
    {
      title: "CLM – Contract Lifecycle Management",
      domain: "Contract & Digital Signing Platform",
      image: "/spa.jpg",
      points: [
        "Developed a comprehensive contract lifecycle management platform, streamlining contract creation, negotiation, and digital signing.",
        "Implemented secure digital signature integrations, ensuring compliance with legal and security standards.",
        "Built automated notification systems and reminder services using Node.js event loops and cron jobs.",
        "Designed and implemented intuitive user interfaces for contract editing and tracking using React and Redux.",
        "Collaborated with stakeholders to define technical requirements and architected scalable system components."
      ]
    },
    {
      title: "ECMS – Enterprise Content Management System",
      domain: "Digital Content Management",
      image: "/ecms.jpg",
      points: [
        "Developed an enterprise-grade content management system, enabling efficient storage, retrieval, and management of digital assets.",
        "Built advanced search algorithms and indexing services using Elasticsearch to improve content discoverability.",
        "Implemented robust access control and versioning systems to maintain document integrity and security.",
        "Developed custom plugins and integrations for third-party tools to extend system functionality.",
        "Optimized frontend performance through code splitting, lazy loading, and asset minification."
      ]
    },
    {
      title: "Eraman – Airport Retail E-Commerce Platform",
      domain: "Airport Retail & E-Commerce",
      image: "/eraman.jpg",
      points: [
        "Contributed to the development of a high-traffic e-commerce platform for airport retail, enhancing the online shopping experience.",
        "Built and maintained complex product catalogs and inventory management systems.",
        "Developed secure checkout flows and integrated multiple international payment providers.",
        "Implemented SEO best practices and performance optimizations to drive organic traffic and improve conversion rates.",
        "Utilized Redis for real-time order tracking and session management."
      ]
    }
  ];

  const internProjects = [
    {
      title: "SaaSPe – AI SaaS Management Platform",
      domain: "AI-driven SaaS management platform for optimizing business operations",
      image: "/saaspe.jpg",
      imgStyle: { objectPosition: "center top", transform: "scale(1.35) translateY(-9%)" },
      points: [
        "Developed AI-driven features for SaaS management, automating license tracking and cost optimization for enterprise clients.",
        "Built and optimized API endpoints using Node.js to handle large-scale data ingestion and processing.",
        "Implemented responsive frontend components using React and customized UI libraries.",
        "Developed automated data migration scripts and integrated cloud storage solutions.",
        "Contributed to technical documentation and participated in agile development ceremonies."
      ]
    },
    {
      title: "TMS – Talent Management System",
      domain: "Employee Lifecycle Optimization System",
      image: "/tms.jpg",
      points: [
        "Built core modules for a talent management system, streamlining recruitment and employee onboarding processes.",
        "Developed frontend interfaces for payroll and performance management using React.",
        "Integrated external HR services and job boards via RESTful APIs.",
        "Developed database schemas and optimized queries to handle complex HR data relations.",
        "Participated in the full software development lifecycle (SDLC), from requirement gathering to deployment."
      ]
    }
  ];

  return (
    <div style={pageContainer}>
      <h1 style={mainTitle}>Professional Projects</h1>

      {/* Company Text */}
      <div style={companySection}>
        <p style={companyText}>
          All enterprise projects delivered under
          <strong> Malaysia Airports Holdings Berhad (MAHB)</strong>
        </p>
        <p style={{ ...companyText, marginTop: "15px", opacity: 0.9, lineHeight: "1.6", maxWidth: "100%" }}>
          Maintained 100% client satisfaction across the MAHB ecosystem by facilitating transparent communication and conducting collaborative UAT sessions directly with stakeholders to guarantee seamless deployment.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            style={card}
            className="reveal glass-card"
            onClick={(e) => handleProjectClick(e, project, 'pro')}
          >
            {project.image && (
              <div className="project-image-container">
                <div className="project-image-inner">
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.02)", ...(project.imgStyle || {}) }}
                  />
                </div>
              </div>
            )}
            <div style={cardHeader}>
              <div>
                <h2 style={{ fontSize: "20px" }}>{project.title}</h2>
                <p style={{ opacity: 0.7, marginTop: "5px" }}>{project.domain}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Internship Section */}
      <h2 style={{ ...mainTitle, marginTop: "60px", marginBottom: "10px" }}>Internship Projects</h2>

      <div className="projects-grid intern-grid" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px" }}>
        {internProjects.map((project, index) => (
          <div
            key={index}
            style={{ ...card, flex: "1 1 350px", maxWidth: "600px" }}
            className="reveal"
            onClick={(e) => handleProjectClick(e, project, 'intern')}
          >
            {project.image && (
              <div className="project-image-container">
                <div className="project-image-inner">
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.02)", ...(project.imgStyle || {}) }}
                  />
                </div>
              </div>
            )}
            <div style={cardHeader}>
              <div>
                <h2 style={{ fontSize: "20px" }}>{project.title}</h2>
                <p style={{ opacity: 0.8, marginTop: "10px", lineHeight: "1.5" }}>{project.domain}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal via Portal to escape stacking contexts */}
      {selectedProject && createPortal(
        <div style={modalOverlay} onClick={() => setSelectedProject(null)}>
          <div
            style={{
              ...modalContent,
              margin: "auto",
              zIndex: 1001,
              animation: "modalZoomIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button style={modalCloseBtn} onClick={() => setSelectedProject(null)}>×</button>
            {selectedProject.image && (
              <div style={modalImageContainer}>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.02)", ...(selectedProject.imgStyle || {}) }}
                />
              </div>
            )}
            <h2 style={{ marginBottom: "10px", fontSize: "20px", lineHeight: "1.3", color: "white" }}>{selectedProject.title}</h2>
            <p style={{ opacity: 0.8, marginBottom: "25px", color: "#38bdf8" }}>{selectedProject.domain}</p>
            <ul style={{ ...bulletList, marginTop: "0" }}>
              {selectedProject.points.map((point, i) => (
                <li key={i} style={{ marginBottom: "15px", lineHeight: "1.6" }}>{point}</li>
              ))}
            </ul>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

/* ================= STYLES ================= */

const pageContainer = {
  paddingTop: "120px",
  padding: "120px 40px 40px 40px",
  background: "#0f172a",
  color: "white",
  minHeight: "100vh"
};

const modalKeyframes = `
  @keyframes modalZoomIn {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .project-image-container {
    width: 100%;
    height: 200px;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 15px;
    perspective: 1000px; /* Essential for 3D effect */
  }

  .project-image-inner {
    width: 100%;
    height: 100%;
    transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), filter 0.6s ease;
    transform-style: preserve-3d;
  }

  .reveal:hover .project-image-inner {
    transform: scale(1.08) rotateX(8deg) translateY(-5px);
    filter: brightness(1.1) drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.4));
  }
  .reveal {
    transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease, border-color 0.4s ease;
    border: 1px solid transparent;
  }

  .reveal:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    border-color: rgba(56, 189, 248, 0.4);
  }
`;

document.head.insertAdjacentHTML("beforeend", `<style>${modalKeyframes}</style>`);

const mainTitle = {
  fontSize: "40px",
  marginBottom: "10px",
  textAlign: "center",
  color: "white",
  fontWeight: "bold"
};

const companySection = {
  marginBottom: "40px",
  textAlign: "center"
};

const companyText = {
  fontSize: "18px"
};

const card = {
  background: "rgba(255,255,255,0.05)",
  padding: "30px",
  borderRadius: "15px",
  cursor: "pointer",
  backdropFilter: "blur(10px)",
  transition: "all 0.3s ease",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  height: "fit-content"
};

const bulletList = {
  marginTop: "20px",
  paddingLeft: "20px",
  color: "#e2e8f0",
  animation: "fadeIn 0.3s ease-in-out"
};

const cardHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const modalOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(15, 23, 42, 0.95)",
  backdropFilter: "blur(10px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 2000,
  padding: "clamp(10px, 3vw, 20px)"
};

const modalContent = {
  background: "#1e293b",
  padding: "clamp(20px, 5vw, 40px)",
  borderRadius: "20px",
  maxWidth: "800px",
  width: "95%",
  position: "relative",
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  boxSizing: "border-box",
  maxHeight: "90vh",
  overflowY: "auto"
};

const modalCloseBtn = {
  position: "absolute",
  top: "15px",
  right: "15px",
  background: "rgba(0, 0, 0, 0.6)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  color: "white",
  fontSize: "24px",
  cursor: "pointer",
  lineHeight: "36px",
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0",
  zIndex: 10,
  backdropFilter: "blur(4px)",
  transition: "all 0.2s"
};

const modalImageContainer = {
  width: "100%",
  height: "250px",
  borderRadius: "10px",
  overflow: "hidden",
  marginBottom: "25px",
  position: "relative"
};
