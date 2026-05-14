export const miniApps = [
  {
    id: "minesweeper",
    name: "Minesweeper",
    image: "/projects/portfolio.webp",
    url: "https://minesweeper.online",
  },
  {
    id: "windows93",
    name: "Windows 93",
    image: "/projects/portfolio.webp",
    url: "https://www.windows93.net/",
  },
  {
    id: "jspaint",
    name: "JS Paint",
    image: "/projects/portfolio.webp",
    url: "https://jspaint.app",
  },
  {
    id: "webamp",
    name: "Webamp",
    image: "/projects/portfolio.webp",
    url: "https://webamp.org",
  },
  {
    id: "winxp",
    name: "Windows XP Simulator",
    image: "/projects/portfolio.webp",
    url: "https://winxp.vercel.app/",
  },
  {
    id: "pointerpointer",
    name: "Pointer Pointer",
    image: "/projects/portfolio.webp",
    url: "https://pointerpointer.com",
  },
  {
    id: "virtualpiano",
    name: "Virtual Piano",
    image: "/projects/portfolio.webp",
    url: "  https://4four.io/embed/piano",
  },
  {
    id: "tekken3",
    name: "Tekken 3",
    image: "/projects/portfolio.webp",
    url: "https://www.retrogames.cc/embed/40238-tekken-3.html",
  },
].map((project) => ({
  ...project,
  slug: project.name.toLowerCase().replace(/\s+/g, "-"),
}));
// this slug just turns it into app5 -> app-5 for the sake of the URL
