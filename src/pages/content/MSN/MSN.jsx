import "./MSN.scss";
import { useState, useRef } from "react";
import Space from "../../../assets/components/ChangeHue/Space/Space";
import { SoundPlayer } from "../../../assets/components/SoundPlayer/SoundPlayer";
import { Helmet } from "react-helmet-async";

export default function MSN() {
  const msn = ["/icons/msnRed.webp", "/icons/msnGreen.webp", "/icons/msnPink.webp", "/icons/msnBlue.webp"];
  const msnSound = ["/msnbuddy1.mp3", "/msnbuddy2.mp3", "/msnbuddy3.mp3"];
  const [msnArray, setMsnArray] = useState([]);

  const [score, setScore] = useState(0);

  const deleteItem = (event) => {
    const buddyEl = event.target;
    const endCall = new Audio("/endCall.mp3");
    endCall.volume = 0.4;
    endCall.play();
    // get rid of clicking
    buddyEl.style.pointerEvents = "none";
    // directly set the fade-out animation and stop float/intro
    buddyEl.style.animation = "clear-out .5s forwards";

    // listen for when the animation ends, then remove the buddy element and add 1 to score
    buddyEl.addEventListener(
      "animationend",
      () => {
        buddyEl.remove();
        setScore((prevScore) => prevScore + 1);
      },
      { once: true }
    );
  };

  const handleBuddyClick = (e) => {
    SoundPlayer("clickxp_r", 0.6, "mp3");

    const randomNum = Math.floor(Math.random() * msn.length);
    const randomNumSound = Math.floor(Math.random() * msnSound.length);
    // ranges copied from old site, need to fix
    const ranges = [[20, 1000]];
    const rangesY = [[0, 700]];
    const chosenRange = ranges[Math.floor(Math.random() * ranges.length)];
    const chosenRangeY = rangesY[Math.floor(Math.random() * rangesY.length)];

    const minY = chosenRangeY[0];
    const maxY = chosenRangeY[1];
    const minX = chosenRange[0];
    const maxX = chosenRange[1];

    const Ylocation = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
    const Xlocation = Math.floor(Math.random() * (maxX - minX + 1)) + minX;

    var newElement2 = (
      <div key={Date.now() + Xlocation} className="msn-buddy" style={{ top: Ylocation, left: Xlocation + 35 }}>
        🌐
      </div>
    );
    setMsnArray([...msnArray, newElement2]);
    var randomElement = msn[randomNum];
    var randomSound = msnSound[randomNumSound];
    const audioElement = new Audio(randomSound);
    audioElement.volume = 0.2;
    audioElement.play();
    var newElement = <img id={`buddy-${Date.now()}`} key={Date.now() + Xlocation} draggable="false" src={randomElement} className="msn-buddy" style={{ top: Ylocation, left: Xlocation }} onClick={deleteItem} />;
    setMsnArray([...msnArray, newElement]);
  };

  const settingsModal = () => {
    console.log("hey");
  };

  return (
    <>
      <Helmet>
        <title>MSN Buddies | Frutiger Aero Hub</title>

        <meta name="description" content="An interactive MSN-inspired Frutiger Aero mini application featuring spawnable MSN buddies." />

        <link rel="canonical" href="https://frutiger-aero.online/msn" />

        {/* OG stuff */}
        <meta property="og:title" content="MSN Experience | Frutiger Aero Hub" />
        <meta property="og:description" content="A nostalgic MSN-inspired Frutiger Aero interactive UI experience." />
        <meta property="og:image" content="https://frutiger-aero.online/og/OpenGraph.jpg" />
        <meta property="og:url" content="https://frutiger-aero.online/msn" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Frutiger Aero Hub" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MSN Buddies | Frutiger Aero Hub" />
        <meta name="twitter:description" content="A nostalgic MSN-inspired Frutiger Aero interactive UI experience." />
        <meta name="twitter:image" content="https://frutiger-aero.online/og/OpenGraph.jpg" />

        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#7fd1ff" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "MSN Buddies",
            applicationCategory: "WebApplication",
            url: "https://frutiger-aero.online/msn",
            description: "An interactive MSN-inspired Frutiger Aero mini application featuring spawnable MSN buddies.",
            operatingSystem: "All",
            publisher: {
              "@type": "Organization",
              name: "Frutiger Aero Hub",
            },
          })}
        </script>
      </Helmet>
      <div style={{ top: 0, left: 0, position: "absolute" }}>{msnArray}</div>
      <div className="msn-container">
        <div onClick={handleBuddyClick} className="msn-button">
          <img src="icons/information.webp"></img>
          <div>Spawn a Friend!</div>
        </div>
        <div onClick={settingsModal} className="msn-settings">
          <img src="icons/settings.webp"></img>
        </div>
      </div>
    </>
  );
}
