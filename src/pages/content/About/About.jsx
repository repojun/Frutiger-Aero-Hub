import "./About.scss";
import { useEffect, useState, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Helmet } from "react-helmet-async";
import { contentSep, content, content2 } from "../../../assets/components/Content/About";
import { AnimatePresence, motion } from "framer-motion";

export default function About() {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState("false"); // why the hell did i use string for boolean here LMAO... imma leave this here bc its funny, i must've been tired (Never do this...)
  const [modal, setModal] = useState(false);
  const [currentImageModal, setCurrentImageModal] = useState("");
  const [imageAlt, setImageAlt] = useState("");

  const toggleModal = (alt, src) => {
    setModal(!modal);
    setCurrentImageModal(src);
    console.log(src);
    setImageAlt(alt);
    console.log(modal);
  };
  // normally you should  put this into a separate component folder/file but for me in this case, it works nicer, i dont have to use this anywhere else other than this file
  const Markdown = ({ children }) => {
    return (
      <div className="markdown">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={{
            img: ({ src, alt }) => <img src={src} alt={alt} className="markdown-img" onClick={() => toggleModal(alt, src)} />,
          }}
        >
          {children}
        </ReactMarkdown>
      </div>
    );
  };

  // creates array of image with the file names and memoized so that it doesnt change on every render
  const images = useMemo(() => Array.from({ length: 7 }, (_, i) => `bordered${i + 1}.webp`), []);

  useEffect(() => {
    const interval = setInterval(() => {
      // fade out first
      setFade(false);

      // after fade-out duration, change image and fade in
      const timeout = setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 500); // match transition in css file, 500 right now

      // cleanup for this timeout if the interval triggers again
      return () => clearTimeout(timeout);
    }, 4000);
    // another clean up for the intervals
    return () => clearInterval(interval);
  }, [images]);
  return (
    <>
      <AnimatePresence>
        {modal && (
          <motion.div className="about-modal-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
            <motion.div
              className="about-modal-body"
              initial={{ scale: 0.2, opacity: 0 }}
              animate={{ scale: [0.2, 1.1, 1], opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
            >
              <div className="title-bar">
                <div>{imageAlt}</div>

                <div className="close-button" onClick={() => setModal(false)}>
                  <div>X</div>
                </div>
              </div>
              <div className="about-flex">
                <div>
                  <img className="current-image" src={currentImageModal} />
                </div>
                <div
                  className="submit-button"
                  style={{ height: "3rem", width: "8rem" }}
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  Close
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Helmet>
        <title>What is Frutiger Aero? | Frutiger Aero Hub</title>

        <meta name="description" content="Learn what the Frutiger Aero aesthetic is, including its visual style, examples, and influence on nostalgic UI and internet design culture." />

        <link rel="canonical" href="https://frutiger-aero.online/about" />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Frutiger Aero Hub" />
        <meta name="theme-color" content="#7fd1ff" />

        <meta name="keywords" content="frutiger aero, frutiger aero aesthetic, web design history, ui design, skeuomorphism, 2000s internet, glass design, aqua ui, nostalgic ui design" />

        <meta property="og:title" content="What is Frutiger Aero?" />
        <meta property="og:description" content="An explanation of the Frutiger Aero aesthetic, its visuals, and its influence on UI and internet design culture." />
        <meta property="og:image" content="https://frutiger-aero.online/og/OpenGraph.png" />
        <meta property="og:url" content="https://frutiger-aero.online/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Frutiger Aero Hub" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="What is Frutiger Aero?" />
        <meta name="twitter:description" content="An explanation of the Frutiger Aero aesthetic, its visuals, and its influence on UI and internet design culture." />
        <meta name="twitter:image" content="https://frutiger-aero.online/og/OpenGraph.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://frutiger-aero.online/about#webpage",
            name: "What is Frutiger Aero?",
            description: "Learn what the Frutiger Aero aesthetic is, including its visual style, examples, and influence on nostalgic UI and internet design culture.",
            url: "https://frutiger-aero.online/about",
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

      <div className="main-title">
        <span>What is Frutiger Aero?</span>
      </div>
      <div className="divider"></div>
      <div className="scrollable">
        <div className="main-about-text">
          <div className="initial-banner">
            <div className="bordered-image-container">
              <img src={"/aero-images/bordered.webp"} className={"overlay"} alt="carousel" />
              <img src={`/aero-images/${images[currentImage]}`} className={"bordered-image " + (fade ? "fade-in" : "fade-out")} alt="carousel" />
            </div>
            <Markdown>{contentSep}</Markdown>
          </div>
          <Markdown>{content}</Markdown>
        </div>

        <div className="main-about-text">
          <Markdown>{content2}</Markdown>
        </div>
      </div>
    </>
  );
}
