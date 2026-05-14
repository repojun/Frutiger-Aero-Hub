import "./Apps.scss";
import { miniApps } from "../../../assets/components/Content/MiniApps";
import { Link } from "react-router";
import { SoundPlayer } from "../../../assets/components/SoundPlayer/SoundPlayer";
export default function Apps() {
  return (
    <>
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
            This page contains a bunch of apps that you can mess around with on the site! Just random cool things that work natively within the Frutiger Aero Hub. Most of these we have not made ourselves, I have included links to the sources on each app. We're looking to constantly
            update it so let us know if you have any suggestions!
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
