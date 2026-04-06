import "./About.scss";
import { useEffect, useState, useMemo } from "react";
import ReactMarkdown from "react-markdown";

export default function About() {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState("false");
  const aeroImages = ["/aero-images/aero_1.png", "/aero-images/aero_17.png", "/aero-images/aero_3.jpg", "/aero-images/aero_4.jpg", "/aero-images/aero_5.jpg", "/aero-images/aero_6.jpg"];
  const content = `
This also spawned many sub aesthetics while users looked at this era such as Frutiger Aurora (Based on Windows aurora backgrounds), Frutiger Eco (Focussing on greens, renewable energy, nature), Frutiger Dorfic (Futuristic, techy, orange designs), Technozen (mid-late 2000s Japanese tech aesthetic).

The aesthetic can also be seen across many platforms, including the PS Vita, Nintendo Wii, old versions of iOS, and more. 

Fun Fact: One interesting and common misconception is the Frutiger font family being used in Windows, it was actually NEVER used with any Windows Aero era interface and the operating system never came with this font. Microsoft actually opted to create their own Segoe UI font which resembled a similar appearance and was inspired by Adrian Frutiger's work.

Below you can see many examples of Frutiger Aero, DORFic, Aurora, Eco and more. As well as this, you can see more content on the tabs above.
`;

  const content2 = `# History Of Frutiger Aero
  During the late 1990s to mid-2000s, tech was at it's peak excitement. The internet was actually becoming mainstream, personal computers were becoming commonplace in businesses & homes
   and companies wanted the entrance to the digital age to feel hopeful, magical and clean. The main earliest signs of Frutiger Aero are seen within Windows XP and it's iconic Bliss background, a perfect green hill under a bright blue sky.
   
   Microsoft later began developing an unreleased operating system called Windows Longhorn, which later became Windows Vista. 

  ## The Rise and Fall of Windows Aero

   Longhorn was the real start of Microsoft's design transition, it leaned heavily into glossy, transparent glow effects with smooth animations and transitions. It aimed to completely rework how 
   Windows worked, the goal was to make computers feel fluid, modern and futuristic. Unfortunately, while many of Longhorn's concept videos looked incredible, features were unstable, performance was poor 
   and the OS was far too complex to ship for the average consumer's PC. 
   
   Longhorn was then scaled back a lot and became what we know today as Windows Vista, released in 2007. Vista still featured the aero glass windows, glow effects, animated UI elements etc but from the early concept videos its 
   clear to see that it definitely lacked the peaks of Longhorn's ambition. Windows Vista overall is looked back at as a poor operating system, it ran sluggishly compared to XP and required above average components at the time.
   However, visually it was wonderfully made, there was a strong sense of depth with the transparent glassy UIs, 3D smooth animations, high quality reflective icon and overall appearance design, lighting was used very intelligently (i.e using light to give visual feedback to the user) and much more.
   It felt like a premium, futuristic operating system in that regard.

   By 2007, the style had spread across a wide range of technology, software, and media. In addition to this, the years ~2007-2012 were when the aesthetic experienced it's peak. The first iPhone released with it's glossy design with realistic textures, almost making the icons seem like real physical elements. Video games/consoles also utilised the aesthetic, with consoles such as the Xbox 360, Nintendo Wii/Wii U, PlayStation 3, PSVita 
   all entering the market with glowy, glassy, reflective and glossy user interfaces. Many advertising companies were also leaning heavily into the aesthetic to show sustainability, global connectivity and innovation among their products. Overall, it made the world feel very hopeful and fresh with the idea that technology was advancing our lives into a future of an eco-friendly, sustainable, peaceful utopia. This led people to
   coin the phrase "The promised future" which is heavily associated with the aesthetic as the world has generally shifted to a much more bleak, hopeless state. 

   Later in 2009, Windows 7 was released. It aimed to refine Vista's Glassy Aero appearance, deliver performance, efficiency, great usability and more. It succeeded massively in all areas, many consider Windows 7 to be the operating system
   that just worked perfectly. It ran smoothly, was very stable & optimised and utilised the Aero design aesthetic perfectly. It was unfortunately the last operating system that Microsoft would release before switching to their flat, boring, tile-based design.

   In 2012, Windows 8 was released and it had a very disappointing reception. Users who loved the glassy, polished looks of Windows 7 felt that Windows 8 looked flat, cold and coporate. It not only unfortunately marked the slow death for what is now known as the "Frutiger Aero era" for Microsoft products, but also for all tech products alike.
   This shift was seen largely across the industry, with Apple moving from their Glossy iOS 6 theme to a much more minimalistic, flat iOS 7 in 2013. After this, Microsoft stuck to their flat minimalist UIs with Windows 10/11.

   In recent years, Frutiger Aero has experienced a resurgence online driven by nostalgia and a general dislike for today's boring, flat, coporate looking designs. This website is an example of that, I love combining modern UI design with Frutiger Aero's glossy, glassy aesthetic and this 
   page was made to help push the aesthetic and serves as a fun, informative site to explore.
   
`;

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
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
        <div className="examples-grid">
          {aeroImages.map((img, index) => (
            <img className="example" src={img} key={index} />
          ))}
        </div>
        <div className="main-about-text">
          <div className="markdown">
            <ReactMarkdown>{content2}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}
