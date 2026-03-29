import "./About.scss";
import { useEffect, useState, useMemo } from "react";

export default function About() {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState("false");
  const aeroImages = [
    "/aero-images/aero_1.png",
    "/aero-images/aero_17.png",
    "/aero-images/aero_3.jpg",
    "/aero-images/aero_4.jpg",
    "/aero-images/aero_5.jpg",
    "/aero-images/aero_6.jpg",
    "/aero-images/aero_7.jpg",
    "/aero-images/aero_8.jpg",
    "/aero-images/aero_9.png",
    "/aero-images/aero_10.jpg",
    "/aero-images/aero_11.jpg",
    "/aero-images/aero_12.jpg",
    "/aero-images/aero_13.jpg",
    "/aero-images/aero_14.jpeg",
    "/aero-images/aero_15.jpg",
    "/aero-images/aero_16.jpg",
    "/aero-images/aero_17.png",
    "/aero-images/aero_18.jpg",
  ];

  // creates array of image with the file names and memoized so that it doesnt change on every render
  const images = useMemo(() => Array.from({ length: 7 }, (_, i) => `bordered${i + 1}.png`), []);

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
      <div className="main-title">
        <img src="/icons/teddyorb_noglow.png"></img>
        <span>What is Frutiger Aero?</span>
      </div>
      <div className="divider"></div>
      <div className="scrollable">
        <div className="main-about-text">
          <p style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="bordered-image-container">
              <img src={"/aero-images/bordered.png"} className={"overlay"} alt="carousel" />
              <img src={`/aero-images/${images[currentImage]}`} className={"bordered-image " + (fade ? "fade-in" : "fade-out")} alt="carousel" />
            </div>
            Frutiger Aero, also known as Web 2.0 Gloss, is an aesthetic that was very common from around 2005-2013. It was originally unnamed and just the trend at the time, the term "Frutiger Aero" was only established later as people looked back at the designs from this time
            period. It was named after a combination Adrian Frutiger, a Swiss designer who created the Frutiger font family and Windows Aero, which was the design style used by Microsoft when developing their iconic glossy, glassy user interfaces for Windows Vista/7.
          </p>
          <p>
            This also spawned many sub aesthetics while users looked at this era such as Frutiger Aurora (Based on Windows aurora backgrounds), Frutiger Eco (Focussing on greens, renewable energy, nature), Frutiger Dorfic (Futuristic, techy, orange designs), Technozen (mid-late
            2000s Japanese tech aesthetic).
          </p>
          <p>
            Fun Fact: One interesting and common misconception is the Frutiger font family being used in Windows, it was actually NEVER used with any Windows Aero era interface and the operating system never came with this font. Microsoft actually opted to create their own Segoe
            UI font which resembled a similar appearance.
          </p>
          <p>
            Below you can see many examples of Frutiger Aero, as well as examples of Dorfic and Eco on their respective <span className="tab-span">tabs</span> above
          </p>
        </div>
        <div className="examples-grid">
          {aeroImages.map((img, index) => (
            <img className="example" src={img} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
