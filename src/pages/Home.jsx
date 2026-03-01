import "./home.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showAppStoreDialog, setShowAppStoreDialog] = useState(false);
  const [qrImage, setQrImage] = useState("");

  // VIDEO STATE
  const [videoIds, setVideoIds] = useState([]);
  const [videosLoading, setVideosLoading] = useState(true);

  // FETCH VIDEOS FROM API
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(
          "https://api-fuf2uz5wdq-uc.a.run.app/api/user/getAboutAppVideoEmbedId"
        );

        const data = await res.json();

        if (data?.status === "success" && Array.isArray(data.videoEmbedIds)) {
          // remove extra query params (?si=...)
          const cleanedIds = data.videoEmbedIds.map((id) =>
            id.split("?")[0]
          );

          const donationQr = data.donationQR || "";
          setQrImage(donationQr);
          setVideoIds(cleanedIds);
        } else {
          setVideoIds([]);
        }
      } catch (e) {
        console.error("Video fetch error:", e);
      } finally {
        setVideosLoading(false);
      }
    };

    fetchVideos();
  }, []);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch(
        "https://api-fuf2uz5wdq-uc.a.run.app/api/user/saveContactUs",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSuccessMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrorMessage("Failed to send message.");
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
          <img src="/logo.png" alt="ERW Logo" />
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
              className="store-btn"
            >
              <span className="icon">📲</span>
              <span className="text">
                <small>Get it on</small>
                <strong>Play Store</strong>
              </span>
            </a>

            <button
              className="store-btn"
              onClick={() => setShowAppStoreDialog(true)}
            >
              <span className="icon">🍎</span>
              <span className="text">
                <small>Download on the</small>
                <strong>App Store</strong>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* NAV */}
      <nav>
        <a href="#purpose-videos">Purpose</a>
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#donate">Donate</a>
        <a href="#contact">Contact</a>
        <Link to="/privacy">Privacy</Link>
        <Link to="/terms">Terms</Link>
      </nav>

      {/* PURPOSE OF APP VIDEOS */}
      <section id="purpose-videos" className="purpose-section">
        <h1>🎯 Our Core Purpose</h1>

        <div className="purpose-highlight">
          <h3>Empowering Learning Through Rewards</h3>
          <p>
            Earn Ref Wave was built to motivate students and gamers by
            combining education, competition, and real rewards.
          </p>
        </div>

        <p className="section-desc">
          Our mission is simple:
          <strong> Complete tasks → Earn Points → Unlock Growth Opportunities.</strong>
          <br /><br />
          Whether through learning contests or gaming competitions,
          the platform encourages skill development, discipline,
          and healthy competition.
        </p>

        <div className="video-grid">
          {videosLoading ? (
            <p>Loading videos...</p>
          ) : videoIds.length === 0 ? (
            <p>No purpose videos available at the moment.</p>
          ) : (
            videoIds.map((id, index) => (
              <iframe
                key={index}
                src={`https://www.youtube.com/embed/${id}`}
                title={`Purpose Video ${index + 1}`}
                allowFullScreen
              />
            ))
          )}
        </div>
      </section>



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
        <div className="video-grid">
          {videosLoading ? (
            <p>Loading videos...</p>
          ) : (
            videoIds.map((id, index) => (
              <iframe
                key={index}
                src={`https://www.youtube.com/embed/${id}`}
                title={`Video ${index + 1}`}
                allowFullScreen
              />
            ))
          )}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features">
        <h2>Why Users Love ERW</h2>
        <div className="features">

          <div className="feature">
            <h3>💰 Earn After Completing Tasks</h3>
            <p>
              Users earn points after successfully completing the given tasks.
              These points can be redeemed to join contests, unlock premium
              content, or win exciting rewards.
            </p>
          </div>
          <div className="feature">
            <h3>🎯 Learner Hub</h3>
            <p>Complete tasks, earn points, unlock tutorials and contests.</p>
          </div>

          <div className="feature">
            <h3>📚 Live Doubt Sessions</h3>
            <p>Get live expert help for better learning outcomes.</p>
          </div>

          <div className="feature">
            <h3>🎮 Game Zone</h3>
            <p>Join gaming contests and win rewards.</p>
          </div>
        </div>
      </section>

      {/* DONATE */}
      <section id="donate">
        <div className="donate-card">
          <h2>Support Our Mission</h2>
          <p>With your support, we can create more educational opportunities.</p>

          {qrImage && (
            <img src={qrImage} alt="Donate QR" />
          )}
        </div>
      </section>


      {/* CONTACT */}
      <section id="contact">
        <h2>Get in Touch</h2>
        <div className="contact-card">
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              name="email"
              type="email"
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

            {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>

      {/* APP STORE DIALOG */}
      {showAppStoreDialog && (
        <div className="dialog-overlay" onClick={() => setShowAppStoreDialog(false)}>
          <div className="dialog-box" onClick={(e) => e.stopPropagation()}>
            <h3>🍎 App Store Coming Soon</h3>
            <p>We will be available soon on App Store.</p>
            <button onClick={() => setShowAppStoreDialog(false)}>Close</button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer>
        <p>© 2026 Earn Ref Wave (ERW)</p>
      </footer>
    </>
  );
}
