import "./Project.scss";
import { projects } from "../../../assets/components/Projects/Projects";
import { useParams, useLocation, Link } from "react-router-dom";
import { SoundPlayer } from "../../../assets/components/SoundPlayer/SoundPlayer";

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
          <div className="enter-button">
            <img className="enter-icon" src="/icons/forward.png"></img>
            <div>Open Website</div>
          </div>
          <div className="meta-data">
            <div>
              <div style={{ fontWeight: "500" }}>Title:</div>
              <div>The Portfolio</div>
            </div>
            <div>
              <div style={{ fontWeight: "500" }}>Author:</div>
              <div>Poopy</div>
            </div>
            <div>
              <div style={{ fontWeight: "500" }}>Category:</div>
              <div>Testing</div>
            </div>
            <div>
              <div style={{ fontWeight: "500" }}>Date Created:</div>
              <div>18/09/26</div>
            </div>
          </div>
        </div>
        <div className="project-description" style={{ whiteSpace: "pre-line" }}>
          {project.description}
        </div>
      </div>
    </>
  );
}
