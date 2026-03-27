export const projects = [
  {
    id: "portfolio1",
    name: "Portfolio 1",
    description: "My basic portfolio site",
    link: "https://example.com/portfolio1",
    image: "https://arjun.needs-to-s.top/4gSaeXF.png",
  },
  {
    id: "app1",
    name: "App 1",
    description: `Welcome to the Frutiger Aero Hub! This is a new website for Frutiger Aero fans & creators, it contains collections of mini apps to use, resources & archives which you can view in the Tabs above. It will also act as a hub for other users to share their own Frutiger Aero projects. 
      
    Teddy the Aero mascot will guide you through the page The site has been developed with my custom design style with plenty of fun features and 
      easter eggs (you can view some on the side bar buttons). 
      
      It's going to act as my final tribute to the aesthetic and my FA inspired design style.
      
      I have opened this site very recently and plan to iteratively add more resources and tabs overtime, please contact me if you have any suggestions!`,
    link: "https://example.com/app1",
    image: "https://arjun.needs-to-s.top/4gSaeXF.png",
  },
  {
    id: "portfolio2",
    name: "Portfolio 2",
    description: "Another basic portfolio",
    link: "https://example.com/portfolio2",
    image: "https://arjun.needs-to-s.top/4gSaeXF.png",
  },
  {
    id: "app2",
    name: "App 2",
    description: "Another simple app",
    link: "https://example.com/app2",
    image: "https://arjun.needs-to-s.top/4gSaeXF.png",
  },
  {
    id: "portfolio3",
    name: "Portfolio 3",
    description: "Yet another portfolio",
    link: "https://example.com/portfolio3",
    image: "https://arjun.needs-to-s.top/4gSaeXF.png",
  },
  {
    id: "app3",
    name: "App 3",
    description: "Yet another app",
    link: "https://example.com/app3",
    image: "https://arjun.needs-to-s.top/4gSaeXF.png",
  },
  {
    id: "app4",
    name: "App 4",
    description: "Simple app example",
    link: "https://example.com/app4",
    image: "https://arjun.needs-to-s.top/4gSaeXF.png",
  },
  {
    id: "portfolio4",
    name: "Portfolio 4",
    description: "Simple portfolio example",
    link: "https://example.com/portfolio4",
    image: "https://arjun.needs-to-s.top/4gSaeXF.png",
  },
  {
    id: "app5",
    name: "App 5",
    description: "Basic app demo",
    link: "https://example.com/app5",
    image: "https://arjun.needs-to-s.top/4gSaeXF.png",
  },
].map((project) => ({
  ...project,
  slug: project.name.toLowerCase().replace(/\s+/g, "-"),
}));
