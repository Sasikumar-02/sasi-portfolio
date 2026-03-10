const expKeyframes = `
  @keyframes expFadeSlideUp {
    0% { opacity: 0; transform: translateY(40px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 768px) {
    .experience-card {
      flex-direction: column !important;
      align-items: center !important;
      text-align: center !important;
      padding: 25px !important;
      gap: 15px !important;
    }
    
    .experience-icon {
      width: 60px !important;
      height: 60px !important;
    }

    .experience-list {
      text-align: left !important;
      padding-left: 20px !important;
    }
  }
`;
if (typeof document !== 'undefined' && !document.getElementById('exp-keyframes')) {
  document.head.insertAdjacentHTML("beforeend", `<style id="exp-keyframes">${expKeyframes}</style>`);
}

export default function Experience() {
  return (
    <div style={pageContainer}>
      <h1 style={mainTitle}>My Work Experience</h1>

      <div style={timelineContainer}>

        {/* INTERN CARD */}
        <div
          className="glass-card"
          style={card}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
            src="/mindgraph-logo.png"
            alt="Mindgraph Logo"
            className="experience-icon"
            style={iconStyle}
          />

          <div>
            <h2 style={{ ...roleTitle, color: "#38bdf8" }}>Frontend Developer Intern</h2>
            <h3 style={company}>Mindgraph Technologies PVT LTD</h3>
            <p style={duration}>Dec 2023 – Jun 2024</p>

            <ul style={list} className="experience-list">
              <li>Engineered interactive user components in React, reducing load times by 20%.</li>
              <li>Collaborated on building robust RESTful APIs using Node.js and Express.</li>
              <li>Optimized PostgreSQL queries for better performance and data retrieval.</li>
              <li>Actively participated in sprints, ensuring timely delivery of high-quality code.</li>
            </ul>
          </div>
        </div>

        {/* VERTICAL TIMELINE LINE */}
        <div style={verticalLine}></div>

        {/* FULL TIME CARD */}
        <div
          className="glass-card"
          style={card}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
            src="/mindgraph-logo.png"
            alt="Mindgraph Logo"
            className="experience-icon"
            style={iconStyle}
          />

          <div>
            <h2 style={{ ...roleTitle, color: "#8b5cf6" }}>Frontend Developer</h2>
            <h3 style={company}>Mindgraph Technologies PVT LTD</h3>
            <p style={duration}>Jul 2024 – Present</p>

            <ul style={list} className="experience-list">
              <li>Engineered dynamic UI components using React.js, Next.js (SSR/SSG), Angular, Redux, and Tailwind CSS, reducing page load times by up to 40% through code splitting and caching strategies.</li>
              <li>Integrated Google Analytics and Google Tag Manager to track user behavior and enable data-driven product decisions.</li>
              <li>Strengthened application security by identifying and resolving VAPT vulnerabilities, implementing secure authentication, improving HTTP security headers, and mitigating OWASP risks.</li>
              <li>Architected secure backend services with Python and FastAPI, delivering scalable REST APIs and ensuring seamless frontend-backend communication.</li>
              <li>Learned micro-frontend architecture, enabling independent deployments, faster builds, and boosted maintainability.</li>
              <li>Streamlined database performance across MySQL, PostgreSQL, and MongoDB through indexing and efficient query design.</li>
              <li>Enhanced application stability by leveraging Redux and Context API to minimize unnecessary re-renders.</li>
              <li>Collaborated with product managers, designers, and backend engineers to deliver production-ready features aligned with business goals.</li>
              <li>Elevated code quality by introducing unit and integration testing with Jest and React Testing Library, reducing production defects and improving release confidence.</li>
            </ul>
          </div>
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

const mainTitle = {
  fontSize: "42px",
  marginBottom: "20px",
  textAlign: "center",
  color: "white",
  fontWeight: "bold",
  paddingBottom: "20px"
};

const timelineContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "800px",
  margin: "0 auto",
  gap: "20px"
};

const verticalLine = {
  width: "3px",
  height: "70px",
  background: "linear-gradient(to bottom, #38bdf8, #8b5cf6)",
  borderRadius: "2px",
  opacity: 0,
  animation: "expFadeSlideUp 0.6s ease-out 0.15s forwards"
};

const card = {
  display: "flex",
  gap: "25px",
  background: "rgba(255,255,255,0.05)",
  padding: "35px",
  borderRadius: "20px",
  backdropFilter: "blur(10px)",
  transition: "0.3s",
  alignItems: "flex-start",
  width: "100%"
};

const iconStyle = {
  width: "80px",
  height: "80px",
  objectFit: "contain"
};

const roleTitle = {
  fontSize: "22px",
  marginBottom: "5px"
};

const company = {
  fontSize: "18px",
  opacity: 0.9
};

const duration = {
  fontSize: "14px",
  opacity: 0.6,
  marginBottom: "15px"
};

const description = {
  marginBottom: "15px",
  opacity: 0.8
};

const list = {
  lineHeight: "1.8",
  fontSize: "14px"
};