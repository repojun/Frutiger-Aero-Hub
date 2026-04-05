import "./GuestBook.scss";
import { useEffect, useState } from "react";
import { getMessages, addMessage } from "../../../api/messages";
import { showErrorToast, showToast } from "../../../assets/components/Toast/Toast";
export default function GuestBook() {
  const [messages, setMessages] = useState([]);
  const [quote, setQuote] = useState("");
  const [message, setMessage] = useState("");
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadMessages = async () => {
    try {
      const { data, error } = await getMessages();
      if (error) throw error;
      setMessages(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const submitMessage = async () => {
    // need to add something here to show th euser that the message was created
    if ((message, name)) {
      try {
        const { error } = await addMessage(message, website, country, name, quote);
        if (error) throw error;

        const messageWithTimestamp = {
          message,
          website,
          country,
          name,
          quote,
          created_at: new Date().toISOString(),
        };

        setMessages((prev) => [...prev, messageWithTimestamp]); // adding here isntead of reloading
      } catch (err) {
        console.log(err);
      } finally {
        showToast("Message Submitted!");
        setSent(true);
        localStorage.setItem("messageSentAt", Date.now().toString());
      }
    } else {
      showErrorToast("Fill all required fields!");
    }
  };

  const getCooldownRemaining = () => {
    const sentAt = localStorage.getItem("messageSentAt");
    if (!sentAt) return 0;

    const cooldown = 5 * 60 * 1000; // 5 mins, basically 60 * 1000 (ms) is a minute, then multiply by 5
    const now = Date.now();

    const remaining = cooldown - (now - Number(sentAt));

    return remaining > 0 ? remaining : 0;
  };

  const showCooldown = () => {
    const remaining = getCooldownRemaining();

    if (remaining <= 0) return;

    const minutes = Math.ceil(remaining / 60000);

    showErrorToast(`You can send again in ${minutes} minutes`);
  };

  useEffect(() => {
    const remaining = getCooldownRemaining();

    if (remaining > 0) {
      setSent(true);
    } else {
      localStorage.removeItem("messageSentAt");
      setSent(false);
    }
  }, []);

  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <>
      <div className="main-guest-title">Guest Book</div>
      <div className="guest-scrollable">
        <div className="guest-divider" />
        <div className="guest-header-flex">
          <div className="mascot-image-container">
            <img src="/aero-images/teddy_guide.png" className={"mascot-bordered-image"} />
          </div>
          <div className="guest-banner" style={{ height: "auto" }}>
            <div className="title">Teddy Says:</div>
            <span>Here you can view messages left by other users by scrolling down. You can also leave a message for the page creator or just leave your mark! Fill the form below and hit submit to get your message in the book.</span>
            <div className="guest-input-container">
              <input
                className={sent ? "text-input disabled" : "text-input"}
                placeholder="Name"
                type="name"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                disabled={sent}
              />
            </div>
            <div className="guest-input-container">
              <input
                className={sent ? "text-input disabled" : "text-input"}
                placeholder="Country (Optional)"
                type="country"
                name="country"
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
                disabled={sent}
              />
            </div>
            <div className="guest-input-container">
              <input
                className={sent ? "text-input disabled" : "text-input"}
                placeholder="Website (Optional)"
                type="website"
                name="website"
                value={website}
                onChange={(e) => {
                  setWebsite(e.target.value);
                }}
                disabled={sent}
              />
            </div>
            <div className="guest-input-container">
              <input
                className={sent ? "text-input disabled" : "text-input"}
                placeholder="If you could give a piece of advice to everyone in the world, what would it be? (Optional)"
                type="quote"
                name="quote"
                value={quote}
                onChange={(e) => {
                  setQuote(e.target.value);
                }}
                disabled={sent}
                style={{ maxWidth: "97%", minWidth: "97%", height: "2rem", maxHeight: "8rem" }}
              />
            </div>
            <div className="guest-input-container">
              <textarea
                className={sent ? "text-input disabled" : "text-input"}
                placeholder="Message"
                type="message"
                name="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                disabled={sent}
                style={{ maxWidth: "97%", minWidth: "97%", height: "2rem", maxHeight: "8rem" }}
              />
            </div>

            <div className={sent ? "submit-button disabled" : "submit-button"} onClick={sent ? () => showCooldown() : submitMessage}>
              <img src="icons/forward.png" className="icon" />
              <span>Submit</span>
            </div>
          </div>
        </div>
        <div className="guest-divider" />
        {loading ? (
          <div>Loading Messages...</div>
        ) : (
          <div className="messages">
            {[...messages].reverse().map((msg) => (
              <div className="message">
                <div className="timestamp">{new Date(msg.created_at).toLocaleString()}</div>
                {msg.name ? (
                  <div>
                    <span className="title">Name:</span> {msg.name}
                  </div>
                ) : (
                  <></>
                )}
                {msg.country ? (
                  <div>
                    <span className="title">Country:</span> {msg.country}
                  </div>
                ) : (
                  <></>
                )}
                {msg.website ? (
                  <div>
                    <span className="title">Website:</span> {msg.website}
                  </div>
                ) : (
                  <></>
                )}
                {msg.quote ? (
                  <div>
                    <span className="title">Quote:</span> {msg.quote}
                  </div>
                ) : (
                  <></>
                )}
                {msg.message ? (
                  <div>
                    <span className="title">Message:</span> {msg.message}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
