export const projects = [
  {
    id: "portfolio",
    name: "My Portfolio",
    description: "My basic portfolio site",
    link: "https://example.com/portfolio1",
    image: "https://arjun.needs-to-s.top/4gSaeXF.png",
  },
  {
    id: "google",
    name: "Aero Search Page",
    description: `Welcome to the Frutiger Aero Hub! This is a new website for Frutiger Aero fans & creators, it contains collections of mini apps to use, resources & archives which you can view in the Tabs above. It will also act as a hub for other users to share their own Frutiger Aero projects. 
      
    Teddy the Aero mascot will guide you through the page The site has been developed with my custom design style with plenty of fun features and 
      easter eggs (you can view some on the side bar buttons). 
      
      It's going to act as my final tribute to the aesthetic and my FA inspired design style.
      
      I have opened this site very recently and plan to iteratively add more resources and tabs overtime, please contact me if you have any suggestions!`,
    link: "https://example.com/app1",
    image: "https://arjun.needs-to-s.top/6UeNuGm.png",
  },
  {
    id: "reddit-design",
    name: "Reddit Design",
    description: "Another basic portfolio",
    link: "https://example.com/portfolio2",
    image: "https://arjun.needs-to-s.top/9E1tzSG.jpg",
  },
  {
    id: "aero-archive",
    name: "Frutiger Aero Archive",
    description: "Another simple app",
    link: "https://example.com/app2",
    image: "https://arjun.needs-to-s.top/2fM4FgH.jpg",
  },
  {
    id: "voice-sync",
    name: "VoiceSync",
    description: "Yet another portfolio",
    link: "https://voicesync.modsync.app/",
    image: "https://arjun.needs-to-s.top/75LLvxT.png",
  },
].map((project) => ({
  ...project,
  slug: project.name.toLowerCase().replace(/\s+/g, "-"),
}));
// this slug just turns it into app5 -> app-5 for the sake of the URL
