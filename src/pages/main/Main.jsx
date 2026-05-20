import "./Main.scss";
import { useEffect, useState, useRef, useMemo } from "react";
import Space from "../../assets/components/ChangeHue/Space/Space";
import RedditModal from "../../assets/components/RedditModal/RedditModal";
import { SoundPlayer } from "../../assets/components/SoundPlayer/SoundPlayer";
import { changeHue } from "../../assets/components/ChangeHue/ChangeHue";
import { Link, useLocation } from "react-router";
import { about } from "../../assets/components/Content/About";
import { shopContent } from "../../assets/components/Content/Shop";
import { Helmet } from "react-helmet-async";

export default function Main({ children }) {
  const location = useLocation();
  const divRef = useRef(null);
  const [open, setOpen] = useState(false);

  // setting id up
  useEffect(() => {
    let anonId = localStorage.getItem("temp_id");

    if (!anonId) {
      anonId = crypto.randomUUID();
      localStorage.setItem("temp_id", anonId);
    }
  }, []);

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
    { name: "Home", path: "/", icon: "/icons/globe.webp" },
    { name: "About", path: "/about", icon: "/icons/information.webp" },
    { name: "Resources", path: "/resources", icon: "/icons/globe2.webp" },
    { name: "Discover", path: "/discover", icon: "/icons/search.webp" },
    { name: "Weather", path: "/weather", icon: "/icons/weather.webp" },
    { name: "MSN", path: "/msn", icon: "/icons/msnGrey.webp" },
    { name: "Mini Apps", path: "/apps", icon: "/icons/msnGrey.webp" },
    { name: "Guest Book", path: "/guestbook", icon: "/icons/credits.webp" },
  ];

  const selectedTab = location.pathname;

  const current = tabs.find((t) => t.path === selectedTab) || tabs[0];

  const musicArray = useMemo(
    () => [
      { id: 1, musicFile: "/", icon: "/icons/off.webp", label: "Mute", volume: 0 },
      { id: 6, musicFile: "/music/sunburst.mp3", icon: "/icons/musica.webp", label: "sunburst", volume: 0.1 },
      { id: 7, musicFile: "/music/euphoria.mp3", icon: "/icons/musica.webp", label: "euphoria", volume: 0.1 },
      { id: 8, musicFile: "/music/波.mp3", icon: "/icons/musica.webp", label: "波", volume: 0.1 },
      { id: 9, musicFile: "/music/zetta.mp3", icon: "/icons/musica.webp", label: "zetta", volume: 0.1 },
      { id: 10, musicFile: "/music/unknown.mp3", icon: "/icons/musica.webp", label: "無題", volume: 0.1 },
      { id: 11, musicFile: "/music/waterdisco.mp3", icon: "/icons/musica.webp", label: "water disco", volume: 0.1 },
      { id: 12, musicFile: "/music/url.mp3", icon: "/icons/musica.webp", label: "url", volume: 0.1 },
      { id: 13, musicFile: "/music/thirdeye.mp3", icon: "/icons/musica.webp", label: "third eye", volume: 0.1 },
    ],
    []
  );

  const themeArray = useMemo(
    () => [
      { id: 1, label: "Default", icon: "/icons/pallette.webp", hue: 50 },
      { id: 2, label: "Elixir", icon: "/icons/pallette.webp", hue: 70 },
      { id: 3, label: "Cool Breeze", icon: "/icons/pallette.webp", hue: 0 },
      { id: 4, label: "Eco", icon: "/icons/pallette.webp", hue: 320 },
      { id: 5, label: "Mystic", icon: "/icons/pallette.webp", hue: 85 },
      { id: 6, label: "Autumn", icon: "/icons/pallette.webp", hue: 170 },
    ],
    []
  );

  const backgroundArray = [
    { id: 1, imageFile: "https://arjun.needs-to-s.top/4AV1Lfb.jpg", icon: "/icons/wallpaper.webp", label: "Hills" },
    { id: 2, imageFile: "https://arjun.needs-to-s.top/9MEzzz8.png", icon: "/icons/wallpaper.webp", label: "Aurora" },
    { id: 12, imageFile: "https://external-preview.redd.it/uhq5zTcMPM3tOW_fbUz4PayDt_5pkEXdyXXoRWs3XOg.jpg?auto=webp&s=e06461124c1ccfdba7e9ece763b644ff68eeb06b", icon: "/icons/wallpaper.webp", label: "Bliss" },
    { id: 3, imageFile: "https://arjun.needs-to-s.top/UsraC4C.jpg", icon: "/icons/wallpaper.webp", label: "Vista" },
    { id: 8, imageFile: "https://www.craftedbyarjun.com/bg3.png", icon: "/icons/wallpaper.webp", label: "Vista Blue" },
    { id: 7, imageFile: "https://arjun.needs-to-s.top/6T22pQu.png", icon: "/icons/wallpaper.webp", label: "Windows 7" },
    { id: 4, imageFile: "https://arjun.needs-to-s.top/7qBiaZ9.png", icon: "/icons/wallpaper.webp", label: "Aurora Purple" },
    { id: 5, imageFile: "https://arjun.needs-to-s.top/8zefmsY.png", icon: "/icons/wallpaper.webp", label: "Aurora Grey" },
    { id: 6, imageFile: "https://arjun.needs-to-s.top/99YQJxE.jpg", icon: "/icons/wallpaper.webp", label: "Aurora Blue" },
    { id: 9, imageFile: "/aero-images/globe.jpg", icon: "/icons/wallpaper.webp", label: "Globe Field" },
    { id: 10, imageFile: "/aero-images/leaf_sky.jpg", icon: "/icons/wallpaper.webp", label: "Leaf Sky" },
    { id: 11, imageFile: "/aero-images/fish.jpg", icon: "/icons/wallpaper.webp", label: "Fish" },
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
      <Helmet>
        <meta name="theme-color" content="#7fd1ff" />

        <meta property="og:site_name" content="Frutiger Aero Hub" />

        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Frutiger Aero Hub",
            url: "https://frutiger-aero.online/",
          })}
        </script>
      </Helmet>
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
                <img src="/icons/globe.webp"></img>
              </div>
            </div>

            <div className="side-bar-welcome">FrutigerOS v1.06b</div>
            <div className="side-divider"></div>
            <div className="button-container">
              <Link className="skeuButton" to={"/"}>
                <img className="icon" src="/icons/login.webp" />
                <div className="skeuButtonBody">Home</div>
              </Link>
              <a className="skeuButton" href="https://www.craftedbyarjun.com/" target="_blank" rel="noopener noreferrer">
                <img className="icon" src="/icons/profile.webp" />
                <div className="skeuButtonBody">My Portfolio</div>
              </a>
              <a className="skeuButton" href="https://www.craftedbyarjun.com/reddit" target="_blank" rel="noopener noreferrer">
                <img className="icon" src="/icons/aeroorbNakedAsf.webp" />
                <div className="skeuButtonBody">Reddit Design</div>
              </a>
              <div
                className="skeuButton"
                onClick={() => {
                  if (modal) {
                    console.log("nothing to see here.");
                  } else {
                    toggleModal({
                      title: "Frutiger Shop - Coming Soon!",
                      image: "",
                      type: "Credits",
                      description: shopContent,
                      array: [],
                    });
                  }
                }}
              >
                <img className="icon" src="/icons/cartIcon.webp" />
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
                      description: about,
                      link: "https://www.craftedbyarjun.com/",
                      type: "About",
                      array: [],
                    });
                  }
                }}
              >
                <img className="icon" style={{ width: "3.3rem" }} src="/icons/information.webp" />
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
                <img className="icon" style={{ width: "3.6rem" }} src="/icons/musica.webp" />
              </div>
              <div
                className="button"
                onClick={() => {
                  if (modal) {
                    console.log("nothing to see here.");
                  } else {
                    toggleModal({ title: "Themes (EXPERIMENTAL HUE CHANGER) ", type: "themeButton", array: themeArray });
                  }
                }}
              >
                <img className="icon" src="/icons/pallette.webp" style={{ width: "3.5rem" }} />
              </div>

              <div
                className="button"
                onClick={() => {
                  if (modal) {
                    console.log("nothing to see here.");
                  } else {
                    toggleModal({ title: "Backgrounds", type: "backgroundButton", array: backgroundArray });
                  }
                }}
              >
                <img className="icon" style={{ width: "3.7rem" }} src="/icons/wallpaper.webp" />
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
            <div
              className="shop-button-wrapper"
              onClick={() => {
                if (modal) {
                  console.log("nothing to see here.");
                } else {
                  toggleModal({
                    title: "Frutiger Shop - Coming Soon!",
                    image: "",
                    type: "Credits",
                    description: shopContent,
                    array: [],
                  });
                }
              }}
            >
              <img src={"icons/cartIcon.webp"} className="shop-modal" />
            </div>
            <div className="dropdown-wrapper">
              <div className="dropdown" onClick={() => setOpen(!open)}>
                <div className="dropdown-selected">
                  <img src={current?.icon} className="dropdown-icon" />
                  <span>{current?.name}</span>
                </div>

                <div className={"dropdown-menu " + (open ? "open" : "")}>
                  {tabs.map((tab) => (
                    <Link
                      key={tab.path}
                      to={tab.path}
                      className={"dropdown-item " + (location.pathname === tab.path ? "active" : "")}
                      onClick={() => {
                        setOpen(false);
                        SoundPlayer("clickxp_r", 0.6, "mp3");
                      }}
                    >
                      <img src={tab.icon} className="dropdown-icon" />
                      <span>{tab.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
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
