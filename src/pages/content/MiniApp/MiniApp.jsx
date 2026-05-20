import "./MiniApp.scss";
import { useParams, useLocation, Link } from "react-router-dom";
import { SoundPlayer } from "../../../assets/components/SoundPlayer/SoundPlayer";
import ReactMarkdown from "react-markdown";
import { miniApps } from "../../../assets/components/Content/MiniApps";
import { Helmet } from "react-helmet-async";

export default function MiniApp() {
  const { slug } = useParams();
  const location = useLocation();

  const miniApp = miniApps.find((p) => p.slug === slug);

  return (
    <>
      <Helmet>
        <title>{miniApp.name} | Frutiger Aero Mini Apps</title>

        <meta name="description" content={`${miniApp.name} is a Frutiger Aero inspired mini app experience embedded inside the Frutiger Aero Hub.`} />

        <link rel="canonical" href={`https://frutiger-aero.online/apps/${miniApp.slug}`} />

        {/* og stuff */}
        <meta property="og:title" content={miniApp.name} />
        <meta property="og:description" content="An interactive Frutiger Aero mini app experience inside the Frutiger Aero Hub." />
        <meta property="og:image" content="https://frutiger-aero.online/og/OpenGraph.jpg" />
        <meta property="og:url" content={`https://frutiger-aero.online/apps/${miniApp.slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Frutiger Aero Hub" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={miniApp.name} />
        <meta name="twitter:description" content="An interactive Frutiger Aero mini app experience inside the Frutiger Aero Hub." />
        <meta name="twitter:image" content="https://frutiger-aero.online/og/OpenGraph.jpg" />

        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#7fd1ff" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: miniApp.name,
            applicationCategory: "WebApplication",
            url: `https://frutiger-aero.online/apps/${miniApp.slug}`,
            description: `${miniApp.name} is a Frutiger Aero inspired mini app experience embedded inside the Frutiger Aero Hub.`,
            operatingSystem: "All",
            publisher: {
              "@type": "Organization",
              name: "Frutiger Aero Hub",
            },
          })}
        </script>
      </Helmet>
      <div className="main-title-project">
        <Link
          className="back-button"
          to="/apps"
          path="/apps"
          onClick={() => {
            SoundPlayer("clickxp_r", 0.6, "mp3");
          }}
        >
          <img src="/icons/backward.webp"></img>
          &nbsp;Back
        </Link>
        {miniApp.name}
      </div>
      <div className="divider"></div>
      <div className="iframe-wrapper">
        <iframe src={miniApp.url} width="900" height="600" frameborder="0"></iframe>{" "}
      </div>
      <div className="original-source" onClick={() => window.open(miniApp.url, "_blank")}>
        Click Here For Original Source
      </div>
    </>
  );
}
