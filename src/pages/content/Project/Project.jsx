import "./Project.scss";
import { useParams, useLocation, Link } from "react-router-dom";
import { SoundPlayer } from "../../../assets/components/SoundPlayer/SoundPlayer";
import ReactMarkdown from "react-markdown";
import { projects } from "../../../assets/components/Content/Projects";
import { Helmet } from "react-helmet-async";

export default function Project() {
  const { slug } = useParams();
  const location = useLocation();

  const project = projects.find((p) => p.slug === slug);

  return (
    <>
      <Helmet>
        <title>{project.name} | Frutiger Aero Hub</title>

        <meta name="description" content={`${project.name} is a featured project in the Frutiger Aero Hub, showcasing Frutiger Aero inspired UI design, aesthetics, and creative digital work.`} />

        <link rel="canonical" href={`https://frutiger-aero.online/project/${project.slug}`} />

        <meta property="og:title" content={project.name} />
        <meta property="og:description" content="A featured project from the Frutiger Aero Hub showcasing Frutiger Aero inspired UI design and digital aesthetics." />
        <meta property="og:image" content="https://frutiger-aero.online/og/OpenGraph.png" />
        <meta property="og:url" content={`https://frutiger-aero.online/project/${project.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Frutiger Aero Hub" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={project.name} />
        <meta name="twitter:description" content="A featured project from the Frutiger Aero Hub showcasing Frutiger Aero inspired UI design and digital aesthetics." />
        <meta name="twitter:image" content="https://frutiger-aero.online/og/OpenGraph.png" />

        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#7fd1ff" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "@id": `https://frutiger-aero.online/project/${project.slug}#work`,
            name: project.name,
            url: `https://frutiger-aero.online/project/${project.slug}`,
            description: `${project.name} is a featured project in the Frutiger Aero Hub, showcasing Frutiger Aero inspired UI design, aesthetics, and creative digital work.`,
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

      <div className="main-title-project">
        <Link
          className="back-button"
          to="/discover"
          path="/discover"
          onClick={() => {
            SoundPlayer("clickxp_r", 0.6, "mp3");
          }}
        >
          <img src="/icons/backward.webp"></img>
          &nbsp;Back
        </Link>
        {project.name}
      </div>
      <div className="divider"></div>
      <div className="project-flex">
        <div className="project-image">
          <img src={project.image} className="project-image-src"></img>
          <a className="enter-button" href={project.link} target="_blank" rel="noopener noreferrer">
            <img className="enter-icon" src="/icons/forward.webp"></img>
            <div>Open Website</div>
          </a>
          <div className="meta-data">
            <div>
              <div style={{ fontWeight: "500" }}>Title:</div>
              <div>{project.name}</div>
            </div>
            <div>
              <div style={{ fontWeight: "500" }}>Author:</div>
              <div>{project.author}</div>
            </div>
            <div>
              <div style={{ fontWeight: "500" }}>Category:</div>
              <div>{project.category}</div>
            </div>
            <div>
              <div style={{ fontWeight: "500" }}>Date Created:</div>
              <div>{project.date}</div>
            </div>
          </div>
        </div>
        <div className="project-description" style={{ whiteSpace: "pre-line" }}>
          <div style={{ fontWeight: "500", fontSize: "1.5rem", paddingBottom: "2rem" }}>{project.creator ? `Message From ${project.author}:` : "Project Description:"}</div>
          <div className="scrollable" style={{ paddingTop: "0rem", paddingLeft: "0.5rem", marginRight: "0rem" }}>
            <div className="markdown">
              <ReactMarkdown>{project.description}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
