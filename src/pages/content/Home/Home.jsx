import "./Home.scss";
import { useEffect, useState } from "react";
import { SoundPlayer } from "../../../assets/components/SoundPlayer/SoundPlayer";

export default function Home() {
  const [currentImage, setCurrentImage] = useState("/aero-images/bordered2.png");
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
      <div className="main-title">
        {/* <img src="/icons/teddyorb_noglow.png"></img> */}
        <span>Welcome to The Frutiger Aero Hub™</span>
      </div>
      <div className="divider"></div>
      <div className="main-text">
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "-2rem" }}>
          <div className="mascot-image-container">
            <div className="speech-bubble-container">
              <div className={speech ? "speech-bubble fade-in" : "speech-bubble"}>i'm teddy! i can guide you through this page.</div>
            </div>
            <img src="/aero-images/bordered.png" className={"mascot-overlay"} />
            <img src={currentImage} className={fade ? "mascot-bordered-image" : "mascot-bordered-image fade-out"} />
          </div>
        </div>
        <p>
          <span className="welcome-span">Welcome to the Frutiger Aero Hub! </span> This is a new website for Frutiger Aero fans & creators, it contains collections of mini apps to use, resources & archives which you can view in the <span className="tab-span">Tabs</span> above. It
          will also act as a hub for other users to share their own Frutiger Aero projects. Teddy the Aero mascot will guide you through the page {"<3"}
        </p>
        <p>The site has been developed with my custom design style with plenty of fun features and easter eggs (you can view some on the side bar buttons). It's going to act as my final tribute to the aesthetic and my FA inspired design style.</p>
        <p>I have opened this site very recently and plan to iteratively add more resources and tabs overtime, please contact me (arjun@craftedbyarjun.com) if you have any suggestions or pieces of media to share!</p>
      </div>
      <div className="divider"></div>
      <div className="button-grid">
        <a className="large-button" href="https://www.reddit.com/r/FrutigerAero/" target="_blank" rel="noopener noreferrer">
          <img src="/icons/aeroorbNakedAsf.png" className="icon"></img>
          <div className="text">
            <div>r/FrutigerAero Subreddit</div>
            <div className="metric">150k+ Members</div>
          </div>
        </a>
        <a className="large-button" href="https://frutigeraeroarchive.org/" target="_blank" rel="noopener noreferrer">
          <img src="/icons/frutigerAeroArchive.png" className="icon" style={{ width: "3rem", paddingRight: "1rem", paddingLeft: ".75rem" }}></img>
          <div className="text">
            <div>Frutiger Aero Archive</div>
            <div className="metric">An amazing Aero archive site</div>
          </div>
        </a>
        <a className="large-button" href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
          <img src="/icons/github.png" className="icon"></img>
          <div className="text">
            <div>Github Repo</div>
            <div className="metric">Please Favourite It!</div>
          </div>
        </a>
        <a className="large-button" href="https://www.craftedbyarjun.com/" target="_blank" rel="noopener noreferrer">
          <img src="/icons/user.png" className="icon" style={{ width: "3.5rem", paddingRight: ".75rem", paddingLeft: ".75rem" }}></img>
          <div className="text">
            <div>My Portfolio</div>
            <div className="metric">200k+ Views</div>
          </div>
        </a>
        <a className="large-button" href="https://www.craftedbyarjun.com/home" target="_blank" rel="noopener noreferrer">
          <img src="/icons/login.png" className="icon" style={{ width: "3.5rem", paddingRight: ".75rem", paddingLeft: ".75rem" }}></img>
          <div className="text">
            <div>Aero Google Search</div>
            <div className="metric">A cool aero browser</div>
          </div>
        </a>
        <div className="large-button">
          <img src="/icons/cartIcon.png" className="icon"></img>
          <div className="text">
            <div>Frutiger Shop</div>
            <div className="metric">Coming Soon!</div>
          </div>
        </div>
      </div>
    </>
  );
}
