import "./MiniApp.scss";
import { useParams, useLocation, Link } from "react-router-dom";
import { SoundPlayer } from "../../../assets/components/SoundPlayer/SoundPlayer";
import ReactMarkdown from "react-markdown";
import { miniApps } from "../../../assets/components/Content/MiniApps";

export default function MiniApp() {
  const { slug } = useParams();
  const location = useLocation();

  const miniApp = miniApps.find((p) => p.slug === slug);

  return (
    <>
      <div className="main-title-project">
        <Link
          className="back-button"
          to="/apps"
          path="/apps"
          onClick={() => {
            SoundPlayer("clickxp_r", 0.6, "mp3");
          }}
        >
          <img src="/icons/backward.png"></img>
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
