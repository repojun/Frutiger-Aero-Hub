import "./Project.scss";
import { projects } from "../../../assets/components/Projects/Projects";
import { useParams, useLocation, Link } from "react-router-dom";
import { SoundPlayer } from "../../../assets/components/SoundPlayer/SoundPlayer";
import ReactMarkdown from "react-markdown";

export default function Project() {
  const { slug } = useParams();
  const location = useLocation();

  const project = projects.find((p) => p.slug === slug);

  return (
    <>
      <div className="main-title-project">
        <Link
          className="back-button"
          to="/discover"
          path="/discover"
          onClick={() => {
            SoundPlayer("clickxp_r", 0.6, "mp3");
          }}
        >
          <img src="/icons/backward.png"></img>
          &nbsp;Back
        </Link>
        {project.name}
      </div>
      <div className="divider"></div>
      <div className="project-flex">
        <div className="project-image">
          <img src={project.image} className="project-image-src"></img>
          <a className="enter-button" href="https://www.craftedbyarjun.com/home" target="_blank" rel="noopener noreferrer">
            <img className="enter-icon" src="/icons/forward.png"></img>
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
