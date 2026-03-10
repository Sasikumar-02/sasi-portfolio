import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  /* ================= PARTICLES INIT ================= */
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  /* ================= SEND EMAIL FUNCTION ================= */
  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(form.current);
      const payload = {
        name: formData.get("user_name"),          // Maps to {{name}}
        user_name: formData.get("user_name"),     // Maps to {{user_name}}
        to_name: formData.get("user_name"),       // Often used in settings
        email: formData.get("user_email"),        // Maps to {{email}}
        user_email: formData.get("user_email"),   // Maps to {{user_email}}
        reply_to: formData.get("user_email"),     // Standard EmailJS variable for Reply-To
        message: formData.get("message")          // Maps to {{message}}
      };

      // 1️⃣ Send email to YOU (Admin Notification + Built-in Auto Reply)
      await emailjs.send(
        "service_0jq4soc",
        "template_zhs83db",     // Admin template (Make sure Auto-Reply tab is ON inside EmailJS for this!)
        payload,
        "8Ueuot6w0yUKXMThd"
      );

      setLoading(false);
      setShowSuccess(true);
      form.current.reset();
      setTimeout(() => setShowSuccess(false), 3000);

    } catch (error) {
      console.error("Email Error:", error);
      setLoading(false);
      alert(`Failed to send message ❌\nReason: ${error.text || error.message || JSON.stringify(error)}`);
    }
  };

  return (
    <div style={pageContainer}>

      {/* PARTICLES BACKGROUND */}
      <Particles
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 60 },
            size: { value: 2 },
            move: { speed: 1 },
            links: { enable: true, color: "#38bdf8" }
          }
        }}
        style={{ position: "absolute" }}
      />

      <div style={contentWrapper}>

        <h1 style={title}>
          Let's Build <span style={gradientText}>Great Software</span>
        </h1>

        <p style={subtitle}>
          Reach out to discuss full-stack development,
          scalable architecture, or exciting collaborations.
        </p>

        {/* CONTACT FORM */}
        <form ref={form} onSubmit={sendEmail} style={formStyle} className="neon-card">

          <input
            name="user_name"
            placeholder="Your Name"
            required
            style={inputStyle}
          />

          <input
            name="user_email"
            type="email"
            placeholder="Your Email"
            required
            style={inputStyle}
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            style={inputStyle}
          />

          <button type="submit" className="animated-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message 🚀"}
          </button>

        </form>

        {/* SOCIAL ICONS */}
        <div style={iconContainer}>
          <a
            href="https://github.com/Sasikumar-02"
            target="_blank"
            rel="noreferrer"
            title="GitHub Profile"
          >
            <FaGithub size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/sasi-kumar-m-077212210/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn Profile"
          >
            <FaLinkedin size={28} />
          </a>

          <a
            href="https://leetcode.com/u/sasi_kumar_m/"
            target="_blank"
            rel="noreferrer"
            title="LeetCode Profile"
            style={{ color: "#f89f1b" }}
          >
            <SiLeetcode size={28} />
          </a>
        </div>

      </div>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/919789113517?text=Hello%20Sasi%20Kumar%20M%2C%20I%20visited%20your%20developer%20portfolio%20and%20would%20like%20to%20connect%20regarding%20software%20development%20opportunities."
        target="_blank"
        rel="noreferrer"
        style={whatsappBubble}
        title="Chat with me on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div style={popupOverlay}>
          <div style={squarePopup}>
            <div style={{ fontSize: "40px", marginBottom: "10px" }}>✅</div>
            <h3 style={{ margin: 0 }}>Message Sent Successfully</h3>
            <p style={{ opacity: 0.8 }}>Check your email for confirmation</p>
          </div>
        </div>
      )}

    </div>
  );
}

/* ================= STYLES ================= */

const pageContainer = {
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
  background: "transparent",
  color: "white"
};

const contentWrapper = {
  position: "relative",
  zIndex: 2,
  padding: "120px 40px",
  textAlign: "center"
};

const title = {
  fontSize: "42px",
  marginBottom: "20px"
};

const gradientText = {
  background: "linear-gradient(90deg, #38bdf8, #a78bfa)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
};

const subtitle = {
  opacity: 0.7,
  marginBottom: "60px"
};

const formStyle = {
  maxWidth: "500px",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  padding: "40px",
  borderRadius: "20px"
};

const inputStyle = {
  padding: "14px",
  borderRadius: "10px",
  border: "none",
  outline: "none"
};

const iconContainer = {
  marginTop: "40px",
  display: "flex",
  justifyContent: "center",
  gap: "50px"
};

const whatsappBubble = {
  position: "fixed",
  bottom: "30px",
  right: "30px",
  background: "#25d366",
  color: "white",
  padding: "15px",
  borderRadius: "50%",
  zIndex: 10,
  boxShadow: "0 0 20px #25d366"
};

const popupOverlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.6)",
  backdropFilter: "blur(5px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 3000
};

const squarePopup = {
  background: "#1e293b",
  border: "2px solid #22c55e",
  boxShadow: "0 0 30px rgba(34, 197, 94, 0.3)",
  padding: "40px",
  borderRadius: "15px",
  textAlign: "center",
  minWidth: "250px"
};