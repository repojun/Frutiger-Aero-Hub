import "./GuestBook.scss";
import { useEffect, useState } from "react";
import { getMessages, addMessage } from "../../../api/messages";
import { showErrorToast, showToast } from "../../../assets/components/Toast/Toast";
import { Helmet } from "react-helmet-async";
export default function GuestBook() {
  const [messages, setMessages] = useState([]);
  const [quote, setQuote] = useState("");
  const [message, setMessage] = useState("");
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const limit = 5;

  const CACHE_KEY = "messages_cache";

  const loadMessages = async () => {
    try {
      // see if the messages exist already
      const cachedMessages = localStorage.getItem(CACHE_KEY);

      if (cachedMessages) {
        const parsed = JSON.parse(cachedMessages);

        // see if cache cooldown is still within 5 minutes
        if (Date.now() - parsed.timestamp < 5 * 60 * 1000) {
          setMessages(parsed.data);
          return; // stop here and use cache instead
        } else {
          localStorage.removeItem(CACHE_KEY);
        }
      }

      // fetch only first 5 messgaes instead of whole thing, initialised limit as 5 above
      const { data, error } = await getMessages(limit, 0);

      if (error) throw error;

      setMessages(data);
      // save first page to cache
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({
          data,
          timestamp: Date.now(),
        })
      );
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    try {
      const nextPage = page + 1;

      // using new get maessages function
      const { data, error } = await getMessages(limit, nextPage * limit);

      if (error) throw error;

      // append new messages instead of replacing them
      setMessages((prev) => [...prev, ...data]);
      setPage(nextPage);

      // if less than 5 returned, no more messages exist so dont display the button
      if (data.length < limit) {
        setHasMore(false);
      }
    } catch (err) {
      console.log(err);
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
      <Helmet>
        <title>Guest Book | Frutiger Aero Hub</title>

        <meta name="description" content="Leave a message in the Frutiger Aero Hub guest book or read entries from other visitors in this nostalgic web experience." />

        <link rel="canonical" href="https://frutiger-aero.online/guestbook" />

        <meta property="og:title" content="Guest Book | Frutiger Aero Hub" />
        <meta property="og:description" content="A Frutiger Aero inspired guest book where users can leave messages and explore community entries." />
        <meta property="og:image" content="https://frutiger-aero.online/og/OpenGraph.png" />
        <meta property="og:url" content="https://frutiger-aero.online/guestbook" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Frutiger Aero Hub" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Guest Book | Frutiger Aero Hub" />
        <meta name="twitter:description" content="A Frutiger Aero inspired guest book where users can leave messages and explore community entries." />
        <meta name="twitter:image" content="https://frutiger-aero.online/og/OpenGraph.png" />

        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#7fd1ff" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://frutiger-aero.online/guestbook#webpage",
            name: "Guest Book",
            description: "Leave a message in the Frutiger Aero Hub guest book or read entries from other visitors in this nostalgic web experience.",
            url: "https://frutiger-aero.online/guestbook",
            isPartOf: {
              "@id": "https://frutiger-aero.online/#website",
            },
            publisher: {
              "@type": "Organization",
              "@id": "https://frutiger-aero.online/#website",
              name: "Frutiger Aero Hub",
            },
          })}
        </script>
      </Helmet>
      <div role="main">
        <div className="main-guest-title" role="heading" aria-level="1">
          Guest Book
        </div>

        <div className="guest-scrollable">
          <div className="guest-divider" />

          <div className="guest-header-flex">
            <div className="mascot-image-container" aria-hidden="true">
              <img src="/aero-images/teddy_guide.webp" className="mascot-bordered-image" alt="" />
            </div>

            <div className="guest-banner" style={{ height: "auto" }}>
              <div className="title" role="heading" aria-level="2">
                Teddy Says:
              </div>

              <span>Here you can view messages left by other users by scrolling down. You can also leave a message for the page creator or just leave your mark! Fill the form below and hit submit to get your message in the book.</span>

              <div className="guest-input-container">
                <input className={sent ? "text-input disabled" : "text-input"} placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} disabled={sent} aria-label="Name" />
              </div>

              <div className="guest-input-container">
                <input className={sent ? "text-input disabled" : "text-input"} placeholder="Country (Optional)" name="country" value={country} onChange={(e) => setCountry(e.target.value)} disabled={sent} aria-label="Country" />
              </div>

              <div className="guest-input-container">
                <input className={sent ? "text-input disabled" : "text-input"} placeholder="Website (Optional)" name="website" value={website} onChange={(e) => setWebsite(e.target.value)} disabled={sent} aria-label="Website" />
              </div>

              <div className="guest-input-container">
                <input
                  className={sent ? "text-input disabled" : "text-input"}
                  placeholder="If you could give advice to the world..."
                  name="quote"
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  maxLength={200}
                  disabled={sent}
                  style={{ maxWidth: "97%", minWidth: "97%", height: "2rem", maxHeight: "8rem" }}
                  aria-label="Advice or quote"
                />
              </div>

              <div className="guest-input-container">
                <textarea
                  className={sent ? "text-input disabled" : "text-input"}
                  placeholder="Message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={sent}
                  maxLength={300}
                  style={{ maxWidth: "97%", minWidth: "97%", height: "2rem", maxHeight: "8rem" }}
                  aria-label="Message"
                />
              </div>

              <div className={sent ? "submit-button disabled" : "submit-button"} onClick={sent ? () => showCooldown() : submitMessage} role="button" tabIndex={0}>
                <img src="icons/forward.webp" className="icon" alt="" />
                <span>Submit</span>
              </div>
            </div>
          </div>

          <div className="guest-divider" />

          {loading ? (
            <div>Loading Messages...</div>
          ) : (
            <div className="messages">
              {/* only doing certain amount of messages per page to save calls / data transfer */}
              {messages.map((msg, i) => (
                <div className="message" key={i}>
                  <div className="timestamp">{new Date(msg.created_at).toLocaleString()}</div>

                  {msg.name && (
                    <div>
                      <span className="title">Name:</span> {msg.name}
                    </div>
                  )}

                  {msg.country && (
                    <div>
                      <span className="title">Country:</span> {msg.country}
                    </div>
                  )}

                  {msg.website && (
                    <div>
                      <span className="title">Website:</span> {msg.website}
                    </div>
                  )}

                  {msg.quote && (
                    <div>
                      <span className="title">Advice/Quote:</span> {msg.quote}
                    </div>
                  )}

                  {msg.message && (
                    <div>
                      <span className="title">Message:</span> {msg.message}
                    </div>
                  )}
                </div>
              ))}
              {hasMore && (
                <div className="submit-button" onClick={loadMore} style={{ width: "10rem" }}>
                  <img src="icons/forward.webp" className="icon" alt="Load More Button" />

                  <span>Load More</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
