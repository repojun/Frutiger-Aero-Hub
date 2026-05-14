import "./Discover.scss";
import { projects } from "../../../assets/components/Content/Projects";
import { SoundPlayer } from "../../../assets/components/SoundPlayer/SoundPlayer";
import { Link } from "react-router";
export default function Discover() {
  return (
    <>
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
