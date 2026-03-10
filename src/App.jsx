import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import TechnicalShowcase from "./components/QAShowcase";
import Approach from "./components/Approach";
import Contact from "./components/Contact";

/* ROUTE BACKGROUNDS */
const backgrounds = {
  "/": "linear-gradient(135deg, #0f172a, #1e293b)",
  "/about": "linear-gradient(135deg, #1e3a8a, #312e81)",
  "/projects": "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
  "/experience": "linear-gradient(135deg, #0f0c29, #302b63)",
  "/technical-showcase": "linear-gradient(135deg, #0f172a, #111827)",
  "/approach": "linear-gradient(135deg, #141e30, #243b55)",
  "/contact": "linear-gradient(135deg, #0f172a, #134e4a)"
};

/* LOADER */
function PageLoader() {
  return (
    <div className="loader-wrapper">
      <div className="loader-ring"></div>
    </div>
  );
}

/* ANIMATED ROUTES */
function AnimatedRoutes() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 600);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <PageLoader />}

      <div>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            className="route-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              minHeight: "100vh",
              background:
                backgrounds[location.pathname] ||
                "linear-gradient(135deg, #0f172a, #1e293b)",
              transition: "background 0.8s ease"
            }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/technical-showcase" element={<TechnicalShowcase />} />
              <Route path="/approach" element={<Approach />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty("--mouse-x", `${x}%`);
      document.documentElement.style.setProperty("--mouse-y", `${y}%`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div className="tech-grid"></div>
      <Navbar />
      <AnimatedRoutes />
      <footer className="footer-global">
        © 2026 Sasi Kumar M | Full Stack Developer
      </footer>
    </>
  );
}

export default App;