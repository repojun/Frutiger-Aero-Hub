import "./Discover.scss";
import { projects } from "../../../assets/components/Content/Projects";
import { SoundPlayer } from "../../../assets/components/SoundPlayer/SoundPlayer";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
export default function Discover() {
  return (
    <>
      <Helmet>
        <title>Discover Aero Content | Frutiger Aero Hub</title>

        <meta name="description" content="Discover Frutiger Aero inspired websites, apps, media, and aesthetic content curated inside the Frutiger Aero Hub." />

        <link rel="canonical" href="https://frutiger-aero.online/discover" />

        {/* og stuff */}
        <meta property="og:title" content="Discover Aero Content" />
        <meta property="og:description" content="A curated collection of Frutiger Aero inspired content, tools, and creative digital projects." />
        <meta property="og:image" content="https://frutiger-aero.online/og/OpenGraph.png" />
        <meta property="og:url" content="https://frutiger-aero.online/discover" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Frutiger Aero Hub" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Discover Aero Content" />
        <meta name="twitter:description" content="A curated collection of Frutiger Aero inspired content, tools, and creative digital projects." />
        <meta name="twitter:image" content="https://frutiger-aero.online/og/OpenGraph.png" />

        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#7fd1ff" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Discover Aero Content",
            description: "A curated collection of Frutiger Aero inspired content, tools, and creative digital projects.",
            url: "https://frutiger-aero.online/discover",
            publisher: {
              "@type": "Organization",
              name: "Frutiger Aero Hub",
            },
          })}
        </script>
      </Helmet>
      <div className="main-title">
        <span>Discover Aero Content</span>
      </div>
      <div className="divider"></div>
      <div className="resource-header-flex">
        <div className="mascot-image-container">
          <div className="speech-bubble-container">
            <div className={"speech-bubble"}>i'm teddy! i can guide you through this page.</div>
          </div>
          <img src="/aero-images/teddy_guide.webp" className={"mascot-bordered-image"} />
        </div>
        <div className="resource-banner" style={{ height: "auto" }}>
          <div className="title">Teddy Says:</div>
          <span>The Discovery Page holds a bunch of cool Frutiger Aesthetic themed websites, apps, media and more for you to explore (also just cool, useful software and stuff aside from FA). if you have any suggestions let me know!</span>
        </div>
      </div>
      <div className="divider"></div>

      <div className="scrollable">
        <div className="discover-grid" style={{ paddingBottom: "18rem" }}>
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.slug}`}
              style={{ display: "block" }}
              onClick={() => {
                SoundPlayer("clickxp_r", 0.6, "mp3");
              }}
            >
              <div className="discover-item">
                <img src={project.image}></img>
                <div className="discover-title">{project.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
