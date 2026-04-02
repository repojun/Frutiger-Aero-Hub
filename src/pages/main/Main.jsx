import "./Main.scss";
import { useEffect, useState, useRef, useMemo } from "react";
import Space from "../../assets/components/ChangeHue/Space/Space";
import RedditModal from "../../assets/components/RedditModal/RedditModal";
import { SoundPlayer } from "../../assets/components/SoundPlayer/SoundPlayer";
import { changeHue } from "../../assets/components/ChangeHue/ChangeHue";
import { Link, useLocation } from "react-router";

export default function Main({ children }) {
  const location = useLocation();
  const divRef = useRef(null);

  // Modal Stuff
  const [modal, setModal] = useState(false);
  const [windowAnimation, setWindowAnimation] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalType, setModalType] = useState("");
  const [modalDescription, setModalDescription] = useState("");
  const [modalLink, setModalLink] = useState("");
  const [currentArray, setCurrentArray] = useState([]);
  const audioRef = useRef(new Audio("/lotuswaters.mp3"));

  // tabs to handle the link changes, can see further in app.jsx, better for SEO
  const tabs = [
    { name: "Home", path: "/", icon: "/icons/globe.png" },
    { name: "About", path: "/about", icon: "/icons/information.png" },
    { name: "Resources", path: "/resources", icon: "/icons/globe2.png" },
    { name: "Discover", path: "/discover", icon: "/icons/search.png" },
    { name: "Weather", path: "/weather", icon: "/icons/weather.png" },
    { name: "MSN", path: "/msn", icon: "/icons/msnGrey.webp" },
    { name: "Guest Book", path: "/guestbook", icon: "/icons/credits.png" },
    { name: "Chat Room", path: "/chatroom", icon: "/icons/msnGrey.webp" },
  ];

  const musicArray = useMemo(
    () => [
      { id: 1, musicFile: "/", icon: "/icons/off.png", label: "Mute", volume: 0 },
      { id: 6, musicFile: "/music/sunburst.mp3", icon: "/icons/musica.png", label: "sunburst", volume: 0.1 },
      { id: 7, musicFile: "/music/euphoria.mp3", icon: "/icons/musica.png", label: "euphoria", volume: 0.1 },
      { id: 8, musicFile: "/music/波.mp3", icon: "/icons/musica.png", label: "波", volume: 0.1 },
      { id: 9, musicFile: "/music/zetta.mp3", icon: "/icons/musica.png", label: "zetta", volume: 0.1 },
      { id: 10, musicFile: "/music/unknown.mp3", icon: "/icons/musica.png", label: "無題", volume: 0.1 },
      { id: 11, musicFile: "/music/waterdisco.mp3", icon: "/icons/musica.png", label: "water disco", volume: 0.1 },
      { id: 12, musicFile: "/music/url.mp3", icon: "/icons/musica.png", label: "url", volume: 0.1 },
      { id: 13, musicFile: "/music/thirdeye.mp3", icon: "/icons/musica.png", label: "third eye", volume: 0.1 },
    ],
    []
  );

  const themeArray = useMemo(
    () => [
      { id: 1, label: "Default", icon: "/icons/pallette.png", hue: 50 },
      { id: 2, label: "Elixir", icon: "/icons/pallette.png", hue: 70 },
      { id: 3, label: "Cool Breeze", icon: "/icons/pallette.png", hue: 0 },
      { id: 4, label: "Eco", icon: "/icons/pallette.png", hue: 320 },
      { id: 5, label: "Mystic", icon: "/icons/pallette.png", hue: 85 },
      { id: 6, label: "Autumn", icon: "/icons/pallette.png", hue: 170 },
    ],
    []
  );

  const backgroundArray = [
    { id: 1, imageFile: "https://arjun.needs-to-s.top/4AV1Lfb.jpg", icon: "/icons/wallpaper.png", label: "Hills" },
    { id: 2, imageFile: "https://arjun.needs-to-s.top/9MEzzz8.png", icon: "/icons/wallpaper.png", label: "Aurora" },
    { id: 3, imageFile: "https://arjun.needs-to-s.top/UsraC4C.jpg", icon: "/icons/wallpaper.png", label: "Vista" },
    { id: 4, imageFile: "https://arjun.needs-to-s.top/7qBiaZ9.png", icon: "/icons/wallpaper.png", label: "Aurora Purple" },
    { id: 5, imageFile: "https://arjun.needs-to-s.top/8zefmsY.png", icon: "/icons/wallpaper.png", label: "Aurora Grey" },
    { id: 6, imageFile: "https://arjun.needs-to-s.top/99YQJxE.jpg", icon: "/icons/wallpaper.png", label: "Aurora Blue" },
    { id: 7, imageFile: "https://arjun.needs-to-s.top/6T22pQu.png", icon: "/icons/wallpaper.png", label: "Wheat" },
  ];

  const buttonSound = () => {
    if (modal === false) {
      SoundPlayer("modalShow");
    } else {
      SoundPlayer("modalHide");
    }
  };

  // this gets passed into the modal
  const subButtonClick = (item) => {
    SoundPlayer("click");
    if (item.musicFile) {
      audioRef.current.src = item.musicFile;
      audioRef.current.load();
      if (item.volume) {
        audioRef.current.volume = item.volume;
      }
      audioRef.current.play();
    } else if (item.imageFile) {
      if (divRef.current) {
        divRef.current.style.setProperty("--bg-image", `url(${item.imageFile})`);
      }
    }
  };

  const toggleModal = ({ title, type, link, description, array }) => {
    setModalType(type);
    setModalLink(link);
    setModalDescription(description);
    setCurrentArray(array);

    if (modal === true) {
      setWindowAnimation(!windowAnimation);
      setTimeout(() => {
        setModal(false);
      }, 500);
    } else {
      setModalTitle(title);
      setModal(true);
      setWindowAnimation(!windowAnimation);
    }

    buttonSound(0.2);
  };

  return (
    <>
      <div className="main-container" ref={divRef}>
        <RedditModal
          modal={modal}
          toggleModal={toggleModal}
          modalTitle={modalTitle}
          description={modalDescription}
          link={modalLink}
          width={"60rem"}
          height={"40rem"}
          windowAnimation={windowAnimation}
          type={modalType}
          buttonArray={currentArray}
          subButtonClick={subButtonClick}
          switchHue={changeHue}
        />
        <Space />
        <div className="circle" />
        <div className="circle2" />
        <div className="body-container">
          <div className="side-bar">
            <div className="store-icon-container">
              <div className="store-icon">
                <img src="/icons/globe.png"></img>
              </div>
            </div>

            <div className="side-bar-welcome">FrutigerOS v1.06b</div>
            <div className="side-divider"></div>
            <div className="button-container">
              <div className="skeuButton" onClick={() => switchPage("Shop")}>
                <img className="icon" src="/icons/login.png" />
                <div className="skeuButtonBody">Home</div>
              </div>
              <div className="skeuButton" onClick={() => switchPage("Profile")}>
                <img className="icon" src="/icons/profile.png" />
                <div className="skeuButtonBody">My Portfolio</div>
              </div>
              <div className="skeuButton" onClick={() => switchPage("Wishlist")}>
                <img className="icon" src="/icons/aeroorbNakedAsf.png" />
                <div className="skeuButtonBody">Reddit Design</div>
              </div>

              <div className="skeuButton" onClick={() => switchPage("Cart")}>
                <img className="icon" src="/icons/cartIcon.png" />
                <div className="skeuButtonBody">Shop</div>
              </div>
            </div>
            <div className="side-divider"></div>

            <div className="grid">
              <div
                className="button"
                onClick={() => {
                  if (modal) {
                    console.log("nothing to see here.");
                  } else {
                    toggleModal({
                      title: "About",
                      image: "",
                      link: "https://www.craftedbyarjun.com/",
                      type: "Credits",
                      array: [],
                    });
                  }
                }}
              >
                <img className="icon" style={{ width: "3.3rem" }} src="/icons/information.png" />
              </div>
              <div
                className="button"
                onClick={() => {
                  if (modal) {
                    console.log("nothing to see here.");
                  } else {
                    toggleModal({ title: "Music", type: "musicButton", array: musicArray });
                  }
                }}
              >
                <img className="icon" style={{ width: "3.6rem" }} src="/icons/musica.png" />
              </div>
              <div
                className="button"
                onClick={() => {
                  if (modal) {
                    console.log("nothing to see here.");
                  } else {
                    toggleModal({ title: "Themes", type: "themeButton", array: themeArray });
                  }
                }}
              >
                <img className="icon" src="/icons/pallette.png" style={{ width: "3.5rem" }} />
              </div>

              <div className="button" onClick={() => {}}>
                <img
                  className="icon"
                  style={{ width: "3.7rem" }}
                  src="/icons/wallpaper.png"
                  onClick={() => {
                    if (modal) {
                      console.log("nothing to see here.");
                    } else {
                      toggleModal({ title: "Backgrounds", type: "backgroundButton", array: backgroundArray });
                    }
                  }}
                />
              </div>
            </div>
            <div className="side-divider"></div>
            <div className="subtext">Website Created By Arjun</div>
          </div>
          <div className="box-wrapper">
            <div className="tabs">
              {tabs.map((tab) => (
                <Link
                  key={tab.path}
                  to={tab.path}
                  onClick={() => {
                    SoundPlayer("clickxp_r", 0.6, "mp3");
                  }}
                  className={"tab" + (location.pathname === tab.path ? " active" : "")}
                >
                  <img className="icon" src={tab.icon} />
                  <div>{tab.name}</div>
                </Link>
              ))}
            </div>
            <div className="main-box">
              <div style={{ minHeight: "0" }}>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
