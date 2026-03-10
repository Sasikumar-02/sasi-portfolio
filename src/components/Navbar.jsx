import { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/technical-showcase", label: "Technical Showcase" },
  { to: "/approach", label: "Approach" },
  { to: "/contact", label: "Contact" }
];

import { motion } from "framer-motion";

const DevLogo = () => (
  <motion.div
    style={logoWrapper}
    whileHover="hover"
    initial="initial"
  >
    <motion.div
      variants={{
        initial: { rotate: 0 },
        hover: { rotate: 180 }
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={logoIcon}
    >
      <div style={logoBrackets}>{"{ }"}</div>
    </motion.div>
    <motion.span
      style={logoText}
      variants={{
        initial: { x: 0, opacity: 1 },
        hover: { x: 5, color: "#38bdf8" }
      }}
    >
      Sasi<span style={{ color: "#a855f7" }}>Dev</span>
    </motion.span>
  </motion.div>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={navStyle}>
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <DevLogo />
      </NavLink>

      {/* Desktop Menu */}
      <div style={menuStyle} className="desktop-menu">
        {navLinks.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            style={({ isActive }) => ({
              ...linkBase,
              ...(isActive ? activeLink : {})
            })}
          >
            {label}
          </NavLink>
        ))}
      </div>

      {/* Mobile Toggle */}
      <div
        className="mobile-icon"
        onClick={() => setIsOpen(!isOpen)}
        style={mobileIconStyle}
      >
        {isOpen ? "✕" : "☰"}
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div style={mobileMenuOverlay} className="mobile-menu-overlay">
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setIsOpen(false)}
              style={({ isActive }) => ({
                ...mobileLinkBase,
                ...(isActive ? mobileActiveLink : {})
              })}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ================= STYLES ================= */

const navStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  padding: "clamp(10px, 2vh, 20px) 2%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "rgba(15, 23, 42, 0.7)",
  backdropFilter: "blur(12px)",
  zIndex: 1000,
  borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
  boxSizing: "border-box"
};

const logoWrapper = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  cursor: "pointer",
  zIndex: 1002
};

const logoIcon = {
  width: "40px",
  height: "40px",
  borderRadius: "10px",
  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 0 15px rgba(56, 189, 248, 0.3)"
};

const logoBrackets = {
  color: "white",
  fontSize: "20px",
  fontWeight: "bold",
  fontFamily: "monospace"
};

const logoText = {
  fontSize: "22px",
  fontWeight: "800",
  color: "white",
  letterSpacing: "-0.5px"
};

const logoStyle = {
  display: "none" // Removed in favor of DevLogo
};

const menuStyle = {
  display: "flex",
  gap: "20px",
  fontSize: "16px"
};

const linkBase = {
  color: "#cbd5e1",
  textDecoration: "none",
  position: "relative",
  paddingBottom: "4px",
  transition: "all 0.3s ease",
  fontWeight: "500"
};

const activeLink = {
  background: "linear-gradient(90deg, #60a5fa, #a855f7)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: "700",
  borderBottom: "2px solid #60a5fa",
  paddingBottom: "2px"
};

const mobileIconStyle = {
  display: "none", // Shown/hidden via CSS media queries in index.css
  fontSize: "32px",
  color: "#38bdf8",
  cursor: "pointer",
  zIndex: 1005,
  userSelect: "none"
};

const mobileMenuOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  background: "#0f172a",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "25px",
  zIndex: 1001,
  animation: "fadeUp 0.4s ease forwards"
};

const mobileLinkBase = {
  color: "#cbd5e1",
  textDecoration: "none",
  fontSize: "24px",
  fontWeight: "600",
  transition: "all 0.3s ease"
};

const mobileActiveLink = {
  color: "#38bdf8",
  transform: "scale(1.1)"
};
