import "./Privacy.scss";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-wrapper">
      <div className="privacy-box" style={{ maxWidth: "800px", margin: "0 auto", padding: "40px", lineHeight: "1.6" }}>
        <h1>Privacy Policy</h1>

        <p>
          <strong>Last updated:</strong> May 25th 2026
        </p>

        <h2>1. What we collect</h2>
        <p>When you submit a message on this website, we may collect:</p>
        <ul>
          <li>Your name (if provided)</li>
          <li>Your message</li>
          <li>Optional details such as website or country</li>
          <li>Your IP address (collected automatically by our server)</li>
        </ul>

        <h2>2. How we use this data</h2>
        <p>We just use this data to show the messages on the guestbook, we dont sell or share data with anybody. If you signed up for the shop waitlist then we will use the email provided to notify you when its out.</p>

        <h2>3. IP addresses</h2>
        <p>IP addresses are logged when messages are submitted. This is used for moderation and security purposes.</p>

        <h2>4. Data storage</h2>
        <p>Data is stored securely using Supabase. Reasonable steps are taken to protect stored information.</p>

        <h2>5. Data retention</h2>
        <p>Messages may be stored indefinitely unless manually removed.</p>

        <h2>6. Your rights</h2>
        <p>You can request deletion of your message by contacting us.</p>

        <h2>7. Contact</h2>
        <p>Contact: arjun@frutiger-aero.online // tytal124@gmail.com</p>
      </div>
    </div>
  );
}
