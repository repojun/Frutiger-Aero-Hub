import "./GuestBook.scss";
import { useEffect, useState } from "react";
import { getMessages, addMessage } from "../../../api/messages";
export default function GuestBook() {
  const [messages, setMessages] = useState([]);
  const [quote, setQuote] = useState("");
  const [message, setMessage] = useState("");
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");

  const loadMessages = async () => {
    try {
      const { data, error } = await getMessages();
      console.log(data);
      if (error) throw error;

      setMessages(data);
    } catch (err) {
      console.log(err);
    }
  };

  const submitMessage = async () => {
    // need to add something here to show th euser that the message was created
    await addMessage(message, website, country, name, quote);
  };

  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <>
      <div className="main-guest-title">
        guest book
      </div>
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
                className="text-input"
                placeholder="Name"
                type="name"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="guest-input-container">
              <input
                className="text-input"
                placeholder="Country (Optional)"
                type="country"
                name="country"
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
              />
            </div>
            <div className="guest-input-container">
              <input
                className="text-input"
                placeholder="Website (Optional)"
                type="website"
                name="website"
                value={website}
                onChange={(e) => {
                  setWebsite(e.target.value);
                }}
              />
            </div>
            <div className="guest-input-container">
              <input
                className="text-input"
                placeholder="If you could give a piece of advice to everyone in the world, what would it be? (Optional)"
                type="quote"
                name="quote"
                value={quote}
                onChange={(e) => {
                  setQuote(e.target.value);
                }}
                style={{ maxWidth: "97%", minWidth: "97%", height: "2rem", maxHeight: "8rem" }}
              />
            </div>
            <div className="guest-input-container">
              <textarea
                className="text-input"
                placeholder="Message"
                type="message"
                name="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                style={{ maxWidth: "97%", minWidth: "97%", height: "2rem", maxHeight: "8rem" }}
              />
            </div>

            <div className="submit-button" onClick={submitMessage}>
              <img src="icons/forward.png" className="icon" />
              <span>Submit</span>
            </div>
          </div>
        </div>
        <div className="guest-divider" />
        <div className="messages">
          {[...messages].reverse().map((msg) => (
            <div className="message">
              <div className="timestamp">{new Date(msg.created_at).toLocaleString()}</div>
              <div>
                <span className="title">Name:</span> {msg.name}
              </div>
              <div>
                <span className="title">Website:</span> {msg.website}
              </div>
              <div>
                <span className="title">Country:</span> {msg.country}
              </div>
              <div>
                <span className="title">Advice for the world:</span> {msg.country}
              </div>
              <div>
                <span className="title">Message:</span> {msg.message}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
