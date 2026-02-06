import "./home.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("https://api-fuf2uz5wdq-uc.a.run.app/api/user/saveContactUs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrorMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* HERO */}
      <div className="hero">
        <div className="hero-box">
          <img src="/logo.png"  alt="ERW Logo" />

          <h1>Earn Ref Wave</h1>

          <p>
            Learn. Earn. Compete.
            <br />
            Complete tasks to earn points and use them in the{" "}
            <strong>Learner Hub</strong> to unlock tutorials, practice papers,
            join <strong>live doubt-clearing sessions</strong>, and participate
            in course-based contests. The <strong>Game Zone</strong> is a
            separate space for gaming contests. Rewards from both sections may
            be similar.
          </p>

          <div className="hero-buttons">
            <a
              href="https://play.google.com/store/apps/details?id=your.package.name"
              target="_blank"
              rel="noreferrer"
            >
              📲 Play Store
            </a>

            <a href="#" className="secondary">
              🍎 App Store
            </a>
          </div>
        </div>
      </div>

      {/* NAV */}
      <nav>
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#donate">Donate</a>
        <a href="#contact">Contact</a>

        <Link to="/privacy">Privacy</Link>
        <Link to="/terms">Terms</Link>
      </nav>

      {/* ABOUT */}
      <section id="about">
        <h2>About Earn Ref Wave</h2>

        <p className="section-desc">
          Earn Ref Wave is a reward-based platform offering two independent
          experiences: the Learner Hub and the Game Zone.
          <br /><br />
          The <strong>Learner Hub</strong> focuses on education. Users complete
          tasks to earn points that can be used to access tutorials, unlock
          practice papers, attend live doubt-clearing sessions, and join
          course-based learning contests. These contests can be joined using
          earned points or by donating a small amount.
          <br /><br />
          The <strong>Game Zone</strong> is dedicated entirely to gaming.
          Gamers can join gaming contests using earned points or donations and
          compete for rewards.
          <br /><br />
          While learning and gaming are completely separate experiences, the
          rewards earned from both sections may be similar and useful for
          further studies or everyday life.
        </p>
      </section>

      {/* FEATURES */}
      <section id="features">
        <h2>Why Users Love ERW</h2>

        <div className="features">
          <div className="feature">
            <h3>🎯 Learner Hub</h3>
            <p>
              Complete tasks, earn points, and use them for tutorials, practice
              papers, live doubt sessions, and course-based contests.
            </p>
          </div>

          <div className="feature">
            <h3>📚 Live Doubt Sessions</h3>
            <p>
              Get real-time help from experts to clear doubts and improve
              learning outcomes.
            </p>
          </div>

          <div className="feature">
            <h3>🎮 Game Zone</h3>
            <p>
              A dedicated gaming area where users can join competitive contests
              using points or donations and earn rewards.
            </p>
          </div>
        </div>
      </section>

      {/* DONATE */}
      <section id="donate">
        <div className="donate-card">
          <h2>Support Our Mission</h2>
          <p>
            With your support, we can create more educational opportunities and make it easier for users to find the right job.
          </p>
          <img src="/donate_qr.png" alt="Donate QR" />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <h2>Get in Touch</h2>

        <div className="contact-card">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <textarea
              rows="5"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            {successMessage && (
              <p style={{ color: "green" }}>{successMessage}</p>
            )}
            {errorMessage && (
              <p style={{ color: "red" }}>{errorMessage}</p>
            )}
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Earn Ref Wave (ERW)</p>
        <p>
          <Link to="/privacy">Privacy Policy</Link> |{" "}
          <Link to="/terms">Terms & Conditions</Link>
        </p>
      </footer>
    </>
  );
}
