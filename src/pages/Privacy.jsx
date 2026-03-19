import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy Policy</h1>
      <p className="muted">Last updated: February 6, 2026</p>

      <section>
        <p>
          This Privacy Policy explains how <strong>Earn Refer Win (Erw pro)</strong>
          (“we”, “our”, or “us”) collects, uses, stores, and protects your
          information when you use the Earn Refer Win mobile application and
          related services (the “App”).
        </p>
        <p>
          By accessing or using the App, you agree to the practices described
          in this Privacy Policy.
        </p>
      </section>

      <section>
        <h2>1. Information We Collect</h2>
        <p>
          We collect information necessary to operate the App and provide
          Learner Hub and Game Zone features.
        </p>
        <ul>
          <li>
            <strong>Account & Authentication Information:</strong> Email
            address, phone number, display name, and unique user ID (UID)
            collected via Firebase Authentication.
          </li>
          <li>
            <strong>User Profile Information:</strong> Profile image, referral
            code, points balance, user level, and other profile details stored
            in Firestore.
          </li>
          <li>
            <strong>Task & Activity Data:</strong> Task participation records,
            completion proofs (such as screenshots), timestamps, and related
            metadata.
          </li>
          <li>
            <strong>Learner Hub Data:</strong> Access to tutorials, practice
            papers, participation in <strong>live doubt-clearing sessions</strong>,
            learning Challenges, points earned, rankings, and rewards.
          </li>
          <li>
            <strong>Game Zone Data:</strong> Gaming contest participation,
            leaderboard rankings, points usage, rewards earned, and redemption
            history.
          </li>
          <li>
            <strong>Wallet & Transactions:</strong> Points balance, contest
            entry records, and donation or payment transaction references.
            We do not store full payment card details.
          </li>
          <li>
            <strong>Device & Usage Information:</strong> Device type, operating
            system, app version, crash logs, and usage analytics.
          </li>
          <li>
            <strong>Local Storage:</strong> App preferences and cached values
            stored locally using GetStorage.
          </li>
          <li>
            <strong>Media Access (QR Codes Only):</strong> The app uses the
            READ_MEDIA_IMAGES permission only to access and save donation QR
            code images on the user’s device. We do not access personal photos
            or share any media. All images remain stored locally on the device.
          </li>
          <li>
            <strong>Push Notifications:</strong> Firebase Cloud Messaging (FCM)
            tokens used to deliver alerts and updates.
          </li>
        </ul>
      </section>

      <section>
        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To operate and maintain the App and its core features.</li>
          <li>To authenticate users and manage accounts.</li>
          <li>
            To administer tasks, Learner Hub activities, and Game Zone
            Challenges.
          </li>
          <li>
            To process contest entries, donations, and rewards using
            authorized third-party payment providers.
          </li>
          <li>
            To send service-related notifications and updates.
          </li>
          <li>
            To monitor performance, detect abuse, and improve the App.
          </li>
          <li>
            To comply with legal and regulatory requirements.
          </li>
        </ul>
      </section>

      <section>
        <h2>Learner Hub — Education & Live Doubt Sessions</h2>
        <p>
          The <strong>Learner Hub</strong> is focused solely on educational
          activities, including tutorials, practice papers, live doubt
          sessions, and course-based Challenges.
        </p>
        <ul>
          <li>
            <strong>Live Doubt Sessions:</strong> Doubt sessions are conducted
            in real time only. They are not private chats and are not recorded
            unless explicitly stated in advance.
          </li>
          <li>
            <strong>Learning Challenges:</strong> Users may join Challenges using
            earned points or optional donations, subject to applicable rules.
          </li>
          <li>
            <strong>Leaderboards:</strong> Display names, ranks, and points may
            be visible to other users.
          </li>
          <li>
            <strong>Moderation:</strong> We may review content and activity to
            ensure fairness and platform safety.
          </li>
        </ul>
      </section>

      <section>
        <h2>Game Zone — Gaming Challenges</h2>
        <p>
          The <strong>Game Zone</strong> is a separate section dedicated
          exclusively to gaming Challenges and competitions.
        </p>
        <ul>
          <li>
            Users may enter gaming Challenges using earned points or optional
            donations.
          </li>
          <li>
            Contest participation data, rankings, rewards, and redemption
            records are collected to operate the Game Zone.
          </li>
          <li>
            Rewards earned in the Game Zone may be similar in nature to those
            offered in the Learner Hub; however, the activities remain
            completely separate.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Third-Party Services</h2>
        <p>We use trusted third-party services, including:</p>
        <ul>
          <li>Firebase (Authentication, Firestore, Storage, Messaging)</li>
          <li>Backend APIs and server infrastructure</li>
          <li>Payment processors such as Razorpay</li>
          <li>Analytics and crash-reporting tools</li>
        </ul>
        <div className="note">
          These third-party services operate under their own privacy policies.
        </div>
      </section>

      <section>
        <h2>4. Data Retention & Deletion</h2>
        <p>
          We retain personal data only for as long as required to provide our
          services or comply with legal obligations. Users may request account
          deletion by contacting us.
        </p>
      </section>

      <section>
        <h2>5. Data Sharing</h2>
        <p>
          We do not sell personal data. Information is shared only with
          authorized service providers or when legally required.
        </p>
      </section>

      <section>
        <h2>6. Security</h2>
        <p>
          We implement reasonable technical and organizational measures to
          protect your data. However, no method of transmission is completely
          secure.
        </p>
      </section>

      <section>
        <h2>7. Children’s Privacy</h2>
        <p>
          The App is not intended for children under 13 years of age. We do
          not knowingly collect personal data from children.
        </p>
      </section>

      <section>
        <h2>8. Your Rights</h2>
        <p>
          You may request access, correction, or deletion of your personal
          information by contacting us:
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:earnrefwave@gmail.com"
            className="email-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            earnrefwave@gmail.com
          </a>

        </p>
      </section>

      <section>
        <h2>9. Policy Updates</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes
          will be reflected with a revised “Last updated” date.
        </p>
      </section>

      <section>
        <h2>10. Availability</h2>
        <p>
          This Privacy Policy is available within the App and may be displayed
          via an in-app WebView.
        </p>
      </section>

      <footer className="muted">
        <p>
          © Earn Refer Win (Erw pro). This document is for informational purposes
          only and does not constitute legal advice.
        </p>
      </footer>
    </div>
  );
}
