import "./Resources.scss";
import { Helmet } from "react-helmet-async";

export default function Resources() {
  const resources = [
    { name: "200+ Frutiger Aero Images", description: "what the title says lol (Google Drive)", link: "https://drive.google.com/drive/folders/1bMyrqg_B2PGQqMVVU980Rx89uTC0CC5T", icon: "/icons/wallpaper.webp" },
    { name: "Frutiger Aero Images Pack", description: "An archived Frutiger Aero gallery (Archive)", link: "https://archive.ph/5ymqr", icon: "/icons/wallpaper.webp" },
    { name: "Black Sheep Stock Photography 1", description: "An old collection of frutiger aero like images (Archive)", link: "https://archive.org/details/BSSP-V1", icon: "/icons/wallpaper.webp" },
    { name: "Black Sheep Stock Photography 2", description: "PT2: An old collection of frutiger aero like images (Archive)", link: "https://archive.org/details/BSSP-V2 Black Sheep Stock Photography Volume 2", icon: "/icons/wallpaper.webp" },
    { name: "Ultimate Windows Wallpaper Pack", description: "Almost all old school Windows Wallpapers (Deviant Art)", link: "https://www.deviantart.com/windowsaesthetics/art/Ultimate-Windows-Wallpaper-Pack-942163195", icon: "/icons/wallpaper.webp" },
    { name: "Crystal Icons Pack (Used for this site)", description: "An amazing glossy icons pack by Everaldo Coelho, I use them regularly (Soft Icons)", link: "https://www.softicons.com/designers/everaldo-coelho", icon: "/icons/globe2.webp" },
    { name: "Softicons", description: "Contains an archive of 2000+ icon packs, many of which are Aero and glossy (Soft Icons)", link: "https://www.softicons.com/", icon: "/icons/globe2.webp" },
    { name: "Windows 7 Icons", description: "All Windows 7 Icons (Virtual Customs)", link: "https://virtualcustoms.net/showthread.php/40369-Original-Windows-7-Icons", icon: "/icons/globe2.webp" },
    { name: "Windows Vista Icons", description: "All Windows Vista Icons (winclassic.net)", link: "https://winclassic.net/thread/2344/windows-vista-icon-pack-1903", icon: "/icons/globe2.webp" },
    { name: "All Windows Desktop Sounds", description: "A Github repository containing all sound effects from Windows Operating Systems (GitHub)", link: "https://github.com/MCPlayer2015/all-windows-sounds", icon: "/icons/musica.webp" },
    { name: "Windows XP Desktop Sounds", description: "All of the Windows XP Desktop SFX  (Archive)", link: "https://archive.org/details/windowsxpstartup_201910/", icon: "/icons/musica.webp" },
    { name: "Windows 7 Desktop Sounds", description: "All of the Windows 7 Desktop SFX  (levithon.itch.io)", link: "https://levithon.itch.io/windows-7-sound-pack-all-themes", icon: "/icons/musica.webp" },
    { name: "Revert8Plus", description: "Allows you to convert Windows 10 to Windows 7 in under 60 seconds (CAUTION: Ensure your Windows version is compatible)", link: "https://teknixstuff.com/Libraries/Projects/Revert8Plus/", icon: "/icons/settings.webp" },
    { name: "OpenShell", description: "Classic Aero Start Menu for Windows 7, 8, 8.1, 10, 11 (Allows you to get Windows 7 start menu/taskbar even on Win11!) (GitHub)", link: "https://github.com/Open-Shell/Open-Shell-Menu", icon: "/icons/settings.webp" },
    { name: "Windhawk", description: "Allows for great, fast Aero customisation with Windows 11 (I use this for Windows 7 Taskbar)", link: "https://windhawk.net/", icon: "/icons/settings.webp" },
    { name: "Frutiger Aero Website Design Commission & More!", description: "Shoot me an email if you're looking for a website commission, video editing, graphic design etc", link: "https://www.craftedbyarjun.com/", icon: "/icons/user.webp" },
    { name: "Frutiger Aero Archive", description: "An incredibly huge collection of resources by Daniele (much more resources than I have here!)", link: "https://frutigeraeroarchive.org/", icon: "/icons/frutigerAeroArchive.webp" },
  ];
  return (
    <>
      <Helmet>
        <title>Resources | Frutiger Aero Hub</title>

        <meta name="description" content="Browse curated Frutiger Aero resources including images, icons, sounds, and media inspired by nostalgic digital design and internet culture." />

        <link rel="canonical" href="https://frutiger-aero.online/resources" />

        <meta property="og:title" content="Frutiger Aero Resources" />
        <meta property="og:description" content="A curated collection of Frutiger Aero inspired resources including media, icons, and design assets." />
        <meta property="og:image" content="https://frutiger-aero.online/og/OpenGraph.png" />
        <meta property="og:url" content="https://frutiger-aero.online/resources" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Frutiger Aero Hub" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Frutiger Aero Resources" />
        <meta name="twitter:description" content="A curated collection of Frutiger Aero inspired resources including media, icons, and design assets." />
        <meta name="twitter:image" content="https://frutiger-aero.online/og/OpenGraph.png" />

        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#7fd1ff" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": "https://frutiger-aero.online/resources#webpage",
            name: "Resources",
            url: "https://frutiger-aero.online/resources",
            description: "Browse curated Frutiger Aero resources including images, icons, sounds, and media inspired by nostalgic digital design and internet culture.",
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
      <div className="main-title">
        <span>Resources</span>
      </div>
      <div className="divider"></div>
      <div className="resource-header-flex">
        <div className="mascot-image-container">
          <div className="speech-bubble-container">
            <div className={"speech-bubble"}>i'm teddy! i can guide you through this page.</div>
          </div>
          <img src="/aero-images/teddy_guide.webp" className={"mascot-bordered-image"} />
        </div>
        <div className="resource-banner">
          <div className="title">Teddy Says:</div>
          <span>
            On this page, you can view the collection of Frutiger Aero Hub resources for you to use. It's full of images, videos, gifs, icons, sounds and more from the era. We don't own all of these, so they may be subject to copyright laws, but it should generally be okay to use
            for your personal projects. There are even resources made by the creator of the hub! It is constantly updated, so be sure to check back later!
          </span>
        </div>
      </div>
      <div className="scrollable-resources" style={{ paddingTop: "1rem" }}>
        <div style={{ paddingBottom: "5rem" }}>
          {resources.map((resource) => (
            <div className="resource" onClick={() => window.open(resource.link, "_blank")}>
              <img src={resource.icon} />

              <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                <span>{resource.name} </span>
                <span className="desc">{resource.description} </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
