import "./Home.scss";
import { useEffect, useState } from "react";
import { SoundPlayer } from "../../../assets/components/SoundPlayer/SoundPlayer";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const [currentImage, setCurrentImage] = useState("/aero-images/bordered2.webp");
  const [fade, setFade] = useState(true);
  const [speech, setSpeech] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentImage("/aero-images/teddy_guide.webp");
        setFade(true);
      }, 500);

      setTimeout(() => {
        setSpeech(true);
        SoundPlayer("balloon", 0.4, "mp3");
      }, 1000);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Helmet>
        <title>The Frutiger Aero Hub | Nostalgic Web Aesthetic & Resources</title>

        <meta name="description" content="The Frutiger Aero Hub is an archive and interactive site exploring the Frutiger Aero aesthetic, UI design, mini apps, and nostalgic 2010s internet culture." />
        <meta name="keywords" content="frutiger aero, aero aesthetic, y2k web design, nostalgic web design, ui archive" />

        <link rel="canonical" href="https://frutiger-aero.online/" />

        {/* og stuff */}
        <meta property="og:title" content="Frutiger Aero Hub" />
        <meta property="og:description" content="The Frutiger Aero Hub is an archive and interactive site exploring the Frutiger Aero aesthetic, UI design, mini apps, and nostalgic 2010s internet culture." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://frutiger-aero.online/" />
        <meta property="og:image" content="https://frutiger-aero.online/og/OpenGraph.png" />
        <meta property="og:site_name" content="Frutiger Aero Hub" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Frutiger Aero Hub" />
        <meta name="twitter:description" content="The Frutiger Aero Hub is an archive and interactive site exploring the Frutiger Aero aesthetic, UI design, mini apps, and nostalgic 2010s internet culture." />
        <meta name="twitter:image" content="https://frutiger-aero.online/og/OpenGraph.png" />

        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#7fd1ff" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Frutiger Aero Hub",
            url: "https://frutiger-aero.online/",
            description: "The Frutiger Aero Hub is an archive and interactive site exploring the Frutiger Aero aesthetic, UI design, mini apps, and nostalgic 2010s internet culture.",
            publisher: {
              "@type": "Organization",
              name: "Frutiger Aero Hub",
            },
          })}
        </script>
      </Helmet>

      <header className="main-title">
        <h1>Welcome to The Frutiger Aero Hub™ </h1>
      </header>

      <div className="divider"></div>

      <main className="main-text">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "-2rem",
          }}
        >
          <figure className="mascot-image-container">
            <div className="speech-bubble-container">
              <div className={speech ? "speech-bubble fade-in" : "speech-bubble"}>i'm teddy! i can guide you through this page.</div>
            </div>

            <img src="/aero-images/bordered.webp" className="mascot-overlay" />
            <img
              src={currentImage}
              className={fade ? "mascot-bordered-image" : "mascot-bordered-image fade-out"}
              onClick={() => {
                if (fade) {
                  SoundPlayer("yap", 0.5);
                }
              }}
            />
          </figure>
        </div>

        <p className="mobile-warning">PSSST hey mobile user! This site is much better on PC and is intended to be used on PC! I did spend a long time making it work on mobile though so dont worry {"<3"}, but if you get the chance check it out on ur laptop or sumn</p>

        <p>
          <span className="welcome-span">Welcome to the Frutiger Aero Hub™! </span> This is a new website for Frutiger Aero fans & creators, it contains collections of mini apps to use, resources & archives which you can view in the <span className="tab-span">Tabs</span> above.
          It will also act as a hub for other users to share their own Frutiger Aero projects. Teddy the Aero mascot will guide you through the page {"<3"}
        </p>

        <p>The site has been developed with my custom design style with plenty of fun features and easter eggs (you can view some on the side bar buttons). It's going to act as my final tribute to the aesthetic and my FA inspired design style.</p>

        <p>I have opened this site very recently and plan to iteratively add more resources and tabs overtime, its in BETA so please contact me (arjun@frutiger-aero.online) if you have any suggestions or pieces of media to share!</p>
      </main>

      <div className="divider"></div>

      <nav className="button-grid">
        <a className="large-button" href="https://github.com/repojun/Frutiger-Aero-Hub" target="_blank" rel="noopener noreferrer">
          <img src="/icons/github.webp" className="icon" alt="" />
          <div className="text">
            <div>Github Repo</div>
            <div className="metric">Please Favourite It!</div>
          </div>
        </a>
        <a className="large-button" href="https://www.craftedbyarjun.com/" target="_blank" rel="noopener noreferrer">
          <img
            src="/icons/user.webp"
            className="icon"
            alt=""
            style={{
              width: "3.5rem",
              paddingRight: ".75rem",
              paddingLeft: ".75rem",
            }}
          />
          <div className="text">
            <div>My Portfolio</div>
            <div className="metric">200k+ Views</div>
          </div>
        </a>
        <div className="large-button disable">
          <img src="/icons/cartIcon.webp" className="icon" alt="" />
          <div className="text">
            <div>Frutiger Shop</div>
            <div className="metric">Coming Soon!</div>
          </div>
        </div>
        <a className="large-button" href="https://www.reddit.com/r/FrutigerAero/" target="_blank" rel="noopener noreferrer">
          <img src="/icons/aeroorbNakedAsf.webp" className="icon" alt="" />
          <div className="text">
            <div>r/FrutigerAero Subreddit</div>
            <div className="metric">100k+ Members</div>
          </div>
        </a>
        <a className="large-button" href="https://frutigeraeroarchive.org/" target="_blank" rel="noopener noreferrer">
          <img
            src="/icons/frutigerAeroArchive.webp"
            className="icon"
            alt=""
            style={{
              width: "3rem",
              paddingRight: "1rem",
              paddingLeft: ".75rem",
            }}
          />
          <div className="text">
            <div>Frutiger Aero Archive</div>
            <div className="metric">An amazing Aero archive site</div>
          </div>
        </a>
        <a className="large-button" href="https://www.craftedbyarjun.com/home" target="_blank" rel="noopener noreferrer">
          <img
            src="/icons/login.webp"
            className="icon"
            alt=""
            style={{
              width: "3.5rem",
              paddingRight: ".75rem",
              paddingLeft: ".75rem",
            }}
          />
          <div className="text">
            <div>Aero Google Search</div>
            <div className="metric">A cool aero browser</div>
          </div>
        </a>
      </nav>
    </>
  );
}
