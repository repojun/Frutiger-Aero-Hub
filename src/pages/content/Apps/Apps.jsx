import "./Apps.scss";
import { miniApps } from "../../../assets/components/Content/MiniApps";
import { Link } from "react-router";
import { SoundPlayer } from "../../../assets/components/SoundPlayer/SoundPlayer";
import { Helmet } from "react-helmet-async";

export default function Apps() {
  return (
    <>
      <Helmet>
        <title>Mini Apps | Frutiger Aero Hub</title>

        <meta name="description" content="Explore a collection of Frutiger Aero inspired mini apps and interactive tools inside the Frutiger Aero Hub." />

        <link rel="canonical" href="https://frutiger-aero.online/apps" />

        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#7fd1ff" />
        <meta name="author" content="Frutiger Aero Hub" />
        <meta name="keywords" content="frutiger aero apps, mini apps, retro ui tools, interactive web apps, nostalgic web design, frutiger aero hub" />

        <meta property="og:title" content="Mini Apps | Frutiger Aero Hub" />
        <meta property="og:description" content="A collection of interactive mini apps inspired by Frutiger Aero aesthetics and nostalgic web design." />
        <meta property="og:image" content="https://frutiger-aero.online/og/OpenGraph.png" />
        <meta property="og:url" content="https://frutiger-aero.online/apps" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Frutiger Aero Hub" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mini Apps | Frutiger Aero Hub" />
        <meta name="twitter:description" content="A collection of interactive mini apps inspired by Frutiger Aero aesthetics and nostalgic web design." />
        <meta name="twitter:image" content="https://frutiger-aero.online/og/OpenGraph.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": "https://frutiger-aero.online/apps#webpage",
            name: "Mini Apps",
            description: "A collection of Frutiger Aero inspired mini apps and interactive tools inside the Frutiger Aero Hub.",
            url: "https://frutiger-aero.online/apps",
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
        <span>Mini Apps</span>
      </div>
      <div className="divider"></div>
      <div className="resource-header-flex">
        <div className="mascot-image-container">
          <img src="/aero-images/teddy_guide.webp" className={"mascot-bordered-image"} />
        </div>
        <div className="resource-banner" style={{ height: "auto" }}>
          <div className="title">Teddy Says:</div>
          <span>
            This page contains a bunch of apps that you can mess around with on the site! Just random cool things that work natively within the Frutiger Aero Hub. Most of these we have not made, if they no longer work or have issues let us know and we can delete them. I have
            included links to the sources on each app. We're looking to constantly update it so let us know if you have any suggestions!
          </span>
        </div>
      </div>
      <div className="divider"></div>

      <div className="scrollable">
        <div className="discover-grid" style={{ paddingBottom: "18rem" }}>
          {miniApps.map((miniApps) => (
            <Link
              key={miniApps.id}
              to={`/apps/${miniApps.slug}`}
              style={{ display: "block" }}
              onClick={() => {
                SoundPlayer("clickxp_r", 0.6, "mp3");
              }}
            >
              <div className="discover-item">
                <img src={miniApps.image}></img>
                <div className="discover-title">{miniApps.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

// return (
//   <>
//     <div className="main-title">Chat Room</div>
//     <div className="divider" />

//     <div className="coming-soon">Coming Soon...ish...</div>
//     <img style={{width:"60%", marginTop:"1.5rem"}} src="/comingsoon.png"></img>

//   </>
// );
