import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const techStack = [
  "React", "Next.js", "Node.js", "FastAPI", "Python", "SQL", "MongoDB", "TypeScript"
];

export default function Home() {
  const navigate = useNavigate();

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div style={heroContainer}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              grab: {
                distance: 200,
                line_linked: {
                  opacity: 1
                }
              },
            },
          },
          particles: {
            color: {
              value: "#38bdf8",
            },
            links: {
              color: "#38bdf8",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0
        }}
      />

      <div className="hero-glow-orb"></div>
      <div className="hero-glow-orb-2"></div>

      <div style={techMarquee}>
        {techStack.map((tech, i) => (
          <motion.span
            key={i}
            style={marqueeItem}
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, delay: i * 0.5, repeat: Infinity }}
          >
            {tech}
          </motion.span>
        ))}
      </div>

      <div style={content}>
        <motion.p
          style={smallTag}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          SOFTWARE / FULL STACK DEVELOPER
        </motion.p>

        <motion.h1
          style={heading}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Crafting
          <span style={gradientText}> Intelligent & Scalable </span>
          Digital Solutions
        </motion.h1>

        <motion.p
          style={description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          I'm <strong style={{ color: "#38bdf8" }}>Sasi Kumar M</strong>. I architect high-performance web applications,
          bridging the gap between sleek frontend experiences and robust backend systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            className="home-explore-btn"
            onClick={() => navigate("/projects")}
            style={btnStyle}
          >
            Launch Projects <span style={{ marginLeft: "8px" }}>🚀</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}

const techMarquee = {
  position: "absolute",
  top: "15%",
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  pointerEvents: "none",
  zIndex: 0,
  filter: "blur(1px)"
};

const marqueeItem = {
  fontSize: "24px",
  fontWeight: "900",
  color: "rgba(255,255,255,0.05)",
  textTransform: "uppercase",
  letterSpacing: "4px"
};

const btnStyle = {
  marginTop: "40px",
  padding: "16px 36px",
  fontSize: "18px",
  fontWeight: "700",
  borderRadius: "50px",
  border: "none",
  background: "linear-gradient(90deg, #38bdf8, #818cf8)",
  color: "white",
  cursor: "pointer",
  boxShadow: "0 10px 25px rgba(56, 189, 248, 0.4)",
  transition: "all 0.3s ease"
};

const heroContainer = {
  height: "100vh",
  background: "transparent",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  position: "relative",
  color: "white",
  overflow: "hidden"
};

const overlay = {
  position: "absolute",
  width: "100%",
  height: "100%",
  opacity: 0.3
};

const content = {
  maxWidth: "900px",
  zIndex: 1,
  padding: "20px"
};

const smallTag = {
  fontSize: "14px",
  letterSpacing: "2px",
  marginBottom: "20px",
  opacity: 0,
  animation: "fadeUp 1s ease forwards",
  animationDelay: "0.2s"
};

const heading = {
  fontSize: "clamp(2.5rem, 5vw, 4rem)",
  fontWeight: "bold",
  lineHeight: "1.2",
  opacity: 0,
  animation: "fadeUp 1s ease forwards",
  animationDelay: "0.4s"
};

const gradientText = {
  background: "linear-gradient(90deg, #38bdf8, #a78bfa, #38bdf8)",
  backgroundSize: "200% auto",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  display: "inline-block",
  // animation: "gradientShift 4s linear infinite, float 4s ease-in-out infinite"
};

const description = {
  marginTop: "30px",
  fontSize: "18px",
  lineHeight: "1.7",
  opacity: 0,
  animation: "fadeUp 1s ease forwards",
  animationDelay: "0.6s"
};

