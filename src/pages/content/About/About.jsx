import "./About.scss";
import { useEffect, useState, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function About() {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState("false");
  const aeroImages = ["/aero-images/ios.webp", "/aero-images/vista2.webp", "/aero-images/vista.webp", "/aero-images/aero_1.webp", "/aero-images/aero_17.webp", "/aero-images/aero_3.webp", "/aero-images/aero_4.webp", "/aero-images/aero_5.webp", "/aero-images/aero_6.webp"];
  const contentSep = `
  <a href="https://aesthetics.fandom.com/wiki/Frutiger_Aero" target="_blank"><ins>**Frutiger Aero**</ins></a>, also known as Web 2.0 Gloss, is an aesthetic that was very common from around 2005-2013. It was originally unnamed and just the trend at the time, the term "Frutiger Aero" was only established later as people looked back at the designs from this time period. 
  It was named after a combination <a href="https://en.wikipedia.org/wiki/Adrian_Frutiger" target="_blank"><ins>**Adrian Frutiger**</ins></a>, a Swiss designer who created the <a href="https://en.wikipedia.org/wiki/Frutiger_(typeface)" target="_blank"><ins>**Frutiger Font Family**</ins></a> and <a href="https://en.wikipedia.org/wiki/Windows_Aero" target="_blank"><ins>**Windows Aero**</ins></a>, 
  which was the design style used by <a href="https://en.wikipedia.org/wiki/Microsoft" target="_blank"><ins>**Microsoft**</ins></a> when developing their iconic glossy, glassy user interfaces for Windows Vista/7.`;
  const content = `

  It is based on the clean, glossy, futuristic designs of ~2007-2012. It was commonly used in early tech, advertisements, operating systems and more. It mixed nature with digital optimism, often depicting the future as a peaceful, fresh, sustainable & eco-friendly utopia.
  <a href="https://en.wikipedia.org/wiki/Windows_Vista" target="_blank"><ins>**Windows Vista**</ins></a>, <a href="https://en.wikipedia.org/wiki/Windows_7" target="_blank"><ins>**Windows 7**</ins></a> & the old glossy design of <a href="https://en.wikipedia.org/wiki/IOS_6" target="_blank"><ins>**iOS 6**</ins></a> are great examples of this. 
  
  This also spawned many sub aesthetics while users looked at this era such as <a href="https://aesthetics.fandom.com/wiki/Frutiger_Aero#Frutiger_Aurora" target="_blank"><ins>**Frutiger Aurora**</ins></a> (Based on Windows aurora backgrounds), <a href="href=https://aesthetics.fandom.com/wiki/Frutiger_Eco" target="_blank"><ins>**Frutiger Eco**</ins></a> (Focussing on greens, renewable energy, nature), <a href="https://aesthetics.fandom.com/wiki/DORFic" target="_blank"><ins>**Frutiger DORFic**</ins></a> (Futuristic, techy, orange designs), <a href="https://aesthetics.fandom.com/wiki/Vectordelia" target="_blank"><ins>**Frutiger Metro**</ins></a> (Abstract flourishes, music/tech focused, vibrant colours). 
  
  The aesthetic can also be seen across many platforms, including the <a href="https://en.wikipedia.org/wiki/PlayStation_Vita" target="_blank"><ins>**PSVita**</ins></a>, <a href="https://en.wikipedia.org/wiki/Wii" target="_blank"><ins>**Nintendo Wii**</ins></a>, <a href="https://en.wikipedia.org/wiki/Xbox_360" target="_blank"><ins>**Xbox 360**</ins></a> and more. 
  
  Fun Fact: One interesting and common misconception is the Frutiger font family being used in Windows, it was actually **NEVER used** with any Windows Aero era interface and the operating system never came with this font. Microsoft actually opted to create their own **Segoe UI font** which resembled a similar appearance and was inspired by Adrian Frutiger's work.
  
  Below you can see many examples of Frutiger Aero tech, artwork, advertisements and more. As well as this, you can see more content on the tabs above.
  `;

  const content2 = `# History Of Frutiger Aero
  During the late 1990s to mid-2000s, tech was at it's peak excitement. The internet was actually becoming mainstream, personal computers were becoming commonplace in businesses & homes
   and companies wanted the entrance to the digital age to feel hopeful, magical and clean. The earliest signs of Frutiger Aero are seen within Windows XP and it's iconic Bliss background, a perfect green hill under a bright blue sky.
   
   Microsoft later began developing an unreleased operating system called **Windows Longhorn**, which later became Windows Vista. 
   <div className="images-grid">
    <img src="/aero-images/bliss.webp" />
    <img src="/aero-images/windowsxp.webp" />
    <img src="/aero-images/longhorn.webp" />
   </div>

  ## The Rise of Windows Aero (Longhorn, 2001-2004)
   <a href="https://en.wikipedia.org/wiki/Development_of_Windows_Vista" target="_blank"><ins><strong>Longhorn</strong></ins></a> was the real start of Microsoft's design transition, it leaned heavily into glossy, transparent glow effects with smooth animations and transitions. It aimed to completely rework how 
   Windows worked, the goal was to make computers feel fluid, modern and futuristic. 
   
   It featured some very ambitious ideas such as **"Indigo"** which would have served as a unified communication framework for apps and combine messaging, networking, 
   web services into one system. In addition to this, a new sidebar with chat features and even a context-aware searching which would have been able to identify people, projects, relationships between files when searching for images (essentially like what AI does today). 
   
   Unfortunately, while many of Longhorn's concept videos looked incredible, features were unstable, performance was poor and the OS was far too complex to ship for the average consumer's PC. They were trying to create certain features that we have only
   began to master today.

  Here is an AMAZING <a href="https://www.youtube.com/watch?v=bytS_WVIH8w" target="_blank"><ins><strong>Longhorn Concept video</strong></ins></a> to give you an idea of the vision they had.

   Although Longhorn never released, it's legacy definitely did not disappear. In the background, it ended up shaping the foundation for modern Windows systems and was the start of the Aero design style.

   <div className="images-grid">
    <img src="/aero-images/longhorndemo3.webp" />
    <img src="/aero-images/longhorndemo.webp" />
    <img src="/aero-images/longhorndemo2.webp" />
   </div>

  ## Windows Vista (2007)

   Due to the previously mentioned ambitious features, Longhorn was scaled back a lot and became what we know today as **Windows Vista**, released in 2007. Vista still featured the aero glass windows, glow effects, animated UI elements etc but from the early concept videos its 
   clear to see that it definitely lacked the peaks of Longhorn's ambition. 
   
   **Windows Vista** overall is looked back at as a poor operating system, it ran sluggishly compared to XP and required above average components at the time.
   However, visually it was wonderfully made, there was a strong sense of depth with the transparent glassy UIs, 3D smooth animations, high quality reflective icon and overall appearance design, lighting was used very intelligently (i.e using light to give visual feedback to the user) and much more.
   It felt like a premium, futuristic operating system in that regard.

   Similar to Longhorn in a way, Vista struggled with performance, compatability and much more at launch yet it helped to build further upon the foundation that Longhorn made and certainly had many overlooked features that seperated it from Windows XP. 
   Microsoft learnt from these mistakes and went on to create what arguably was the best operating system they ever released.

   Outisde of **Microsoft**, the new glossy, futuristic look that Windows was taking on had a much larger influence on the industry as a whole.

  <div className="images-grid">
    <img src="/aero-images/vista_os5.webp" />
    <img src="/aero-images/vista_os4.webp" />
    <img src="/aero-images/vista_os2.webp" />
    <img src="/aero-images/vista_os3.webp" />
    <img src="/aero-images/vista_os.webp" />
    <img src="/aero-images/defendyourwow.webp" />
   </div>

  ## Industry design shift (Frutiger Aero's Peak)

   By 2007, the style had spread across a wide range of technology, software, and media. In addition to this, the years ~2007-2012 were when the aesthetic experienced it's peak. The first **iPhone** released with it's glossy design with realistic textures, almost making the icons seem like real physical elements. Video games/consoles also utilised the aesthetic, with consoles such as the **Xbox 360**, **Nintendo Wii/Wii U**, **PlayStation 3**, **PS Vita** 
   all entering the market with glowy, glassy, reflective and glossy user interfaces. Many advertising companies were also leaning heavily into the aesthetic to show sustainability, global connectivity and innovation among their products. 
   
   Overall, it made the world feel very hopeful and fresh with the idea that technology was advancing our lives into a future of an eco-friendly, sustainable, peaceful utopia. This led people to
   coin the phrase **"The promised future"** which is heavily associated with the aesthetic, as people believe that we are living in a very different future compared to the one depicted by these designs back then.

  <div className="images-grid">
    <img src="/aero-images/asadal1.webp" />
    <img src="/aero-images/asadal3.webp" />
    <img src="/aero-images/asadal2.webp" />
    <img src="/aero-images/wii.webp" />
    <img src="/aero-images/xbox360.webp" />
    <img src="/aero-images/psvita.webp" />
   </div>  


 ## Windows 7 (2009)
   Later in 2009, **Windows 7** was released. It aimed to refine Vista's Glassy Aero appearance, deliver performance, efficiency, great usability and more. It succeeded massively in most areas, many consider Windows 7 to be the operating system
   that just worked perfectly. It ran smoothly, was very stable & optimised and utilised the Aero design aesthetic perfectly. In addition to this, unlike Vista, it had a very positive reception from reviewers due to it being a direct improvement from
   Vista and a step in the right direction.
   
   One of the main UI features of **Windows 7** was the new **"Superbar"** taskbar using icons instead of labels, making it feel more modern and uncluttered with large glowing icons. It also came with the ability to pin apps and hover previews with live thumbnails. It provided a polished, consistent version of the Windows Aero
   aesthetic while remaining optimised and hit a sweet spot between visual clarity and resource intensity. It really was just a great operating system that got a lot right.

   It was unfortunately the last operating system that Microsoft would release before switching to their flat, boring, tile-based design.
  
   <div className="images-grid">
    <img src="/aero-images/windows7.webp" />
    <img src="/aero-images/windows7_2.webp" />
    <img src="/aero-images/windows7_3.webp" />
    <img src="/aero-images/windows7_4.webp" />
    <img src="/aero-images/windows7_5.webp" />
    <img src="/aero-images/windows7_6.webp" />
   </div>

  ## The Fall of Windows Aero (Flat, minimalist designs)

   In 2012, **Windows 8** was released and it had a very disappointing reception. Users who loved the glassy, polished looks of **Windows 7** felt that Windows 8 looked flat, cold and coporate. It not only unfortunately marked the slow death for what is now known as the **"Frutiger Aero era"** for Microsoft products, but also for all tech products alike.
   This shift was seen largely across the industry, with **Apple** moving from their Glossy **iOS 6** theme to a much more minimalistic, flat **iOS 7** in 2013. After this, **Microsoft** stuck to their flat minimalist UIs with Windows 10/11.

   Smartphones and tablets totally changed how interfaces needed to work, the smaller screens were seen to need clarity over decoration. As well as this, Aero designs weren't cost effective nor performance friendly and corporations LOVE money... Flat minimalist designs were eventually seen as the industry standard, they became
   the new clean, modern approach to UI designs. Operating Systems like **Windows 8** were trying to unify both mobile and desktop designs together and failed miserably. 
   
   Unfortunately, the personality of designs during this era was largely sacrificed and replaced with the more dull, flat, coporate designs. This effect is still seen massively today with nearly all designs still feeling lifeless and simple.
  
   <div className="images-grid">
    <img src="/aero-images/ios7.webp" />
    <img src="/aero-images/windows8.webp" />
    <img src="/aero-images/windows10.webp" />
   </div>

  ## The Resurgence of Aero (Frutiger Aero)
  Following the death of what was a beloved era in technology and general creativity, the term "Frutiger Aero" was finally coined by  <a href="https://sofixian.com/" target="_blank"><ins><strong>Sofi Xian</strong></ins></a> , Co-Founder of <a href="https://cari.institute/" target="_blank"><ins><strong>**CARI (Consumer Aesthetics Research Institute)**</strong></ins></a>, to describe "the corporate tech aesthetic popular approximately 2005-2013".

   In recent years, **Frutiger Aero** has experienced a resurgence online driven by nostalgia and a general dislike for today's boring, flat, coporate looking designs. People revisiting their early 2000s childhood not only enjoy the more hopeful, detailed designs, but also get a huge
   sense of nostalgia from this era, making the optimistic nature of Frutiger Aero hit even harder as the perception of the future back then was unfortunatley very different to what we have today in reality. 
  
   Many creators have spent lots of time producing pieces of media, music, software and even video games all based around the vibes of **Frutiger Aero** as it continues to gain popularity mainly thanks to social media platforms.

   This website is an example of that, I love combining modern UI design with Frutiger Aero's glossy, glassy aesthetic. I made this page to not only help push the aesthetic, but eventually get some attention for my other work & personal store while also serving as a fun, informative website to explore. In addition, it acts as a personal tribute to the aesthetic that I have been inspired to create so much with and hold so many fond memories of. 

   I'm not sure we will ever see Frutiger Aero in the mainstream again, while we can never actually relive those years we can continue to create pieces such as this website to keep it and it's history alive.

   Below, you can see some final examples of **Frutiger Aero**, **DORFic**, **Aurora**, **Metro** and more. Thank you for reading and thank you so much for checking out my work on this website.

  <div className="images-grid">
    <img src="/aero-images/aero_1.webp" />
    <img src="/aero-images/aero_3.webp" />
    <img src="/aero-images/aero_4.webp" />
    <img src="/aero-images/aero_7.webp" />
    <img src="/aero-images/aero_8.webp" />
    <img src="/aero-images/aero_12.webp" />
    <img src="/aero-images/aurora3.webp" />
    <img src="/aero-images/aero_13.webp" />
    <img src="/aero-images/aero_17.webp" />
    <img src="/aero-images/aero_16.webp" />
    <img src="/aero-images/asadal2.webp" />
    <img src="/aero-images/aero_14.webp" />
    <img src="/aero-images/vista_os4.webp" />
    <img src="/aero-images/vista_os2.webp" />
    <img src="/aero-images/vista_os3.webp" />
    <img src="/aero-images/vista_os.webp" />
    <img src="/aero-images/windows7.webp" />
    <img src="/aero-images/windows7_2.webp" />
    <img src="/aero-images/windows7_3.webp" />
    <img src="/aero-images/windows7_4.webp" />
    <img src="/aero-images/windows7_5.webp" />
    <img src="/aero-images/asadal1.webp" />
    <img src="/aero-images/aurora6.webp" />
    <img src="/aero-images/aurora2.webp" />
    <img src="/aero-images/aero_9.webp" />
    <img src="/aero-images/aurora5.webp" />
    <img src="/aero-images/aurora4.webp" />
    <img src="/aero-images/aero_18.webp" />
    <img src="/aero-images/dorfic1.webp" />
    <img src="/aero-images/dorfic2.webp" />
    <img src="/aero-images/dorfic3.webp" />
    <img src="/aero-images/frutigermetro3.webp" />
    <img src="/aero-images/metro.webp" />
   </div>

`;

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
      <div className="main-title">
        <img src="/icons/teddyorb_noglow.png"></img>
        <span>What is Frutiger Aero?</span>
      </div>
      <div className="divider"></div>
      <div className="scrollable">
        <div className="main-about-text">
          <p style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="bordered-image-container">
              <img src={"/aero-images/bordered.webp"} className={"overlay"} alt="carousel" />
              <img src={`/aero-images/${images[currentImage]}`} className={"bordered-image " + (fade ? "fade-in" : "fade-out")} alt="carousel" />
            </div>
            <div className="markdown">
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>{contentSep}</ReactMarkdown>
            </div>
          </p>
          <div className="markdown">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
          </div>
        </div>
        <div className="examples-grid">
          {aeroImages.map((img, index) => (
            <img className="example" src={img} key={index} />
          ))}
        </div>
        <div className="main-about-text">
          <div className="markdown">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content2}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}
