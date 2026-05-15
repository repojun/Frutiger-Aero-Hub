export const miniApps = [
  {
    id: "minesweeper",
    name: "Minesweeper",
    image: "/apps/minesweeper.png",
    url: "https://minesweeper.online",
  },
  {
    id: "jspaint",
    name: "JS Paint",
    image: "/apps/paint.png",
    url: "https://jspaint.app",
  },
  {
    id: "webamp",
    name: "Webamp",
    image: "/apps/amp.png",
    url: "https://webamp.org",
  },
  {
    id: "winxp",
    name: "Windows XP Simulator",
    image: "/apps/xp.png",
    url: "https://winxp.vercel.app/",
  },
  {
    id: "pointerpointer",
    name: "Pointer Pointer",
    image: "/apps/pointer.png",
    url: "https://pointerpointer.com",
  },
  {
    id: "virtualpiano",
    name: "Virtual Piano",
    image: "/apps/piano.png",
    url: "  https://4four.io/embed/piano",
  },
  {
    id: "tekken3",
    name: "Tekken 3",
    image: "/apps/tekken.png",
    url: "https://www.retrogames.cc/embed/40238-tekken-3.html",
  },
].map((project) => ({
  ...project,
  slug: project.name.toLowerCase().replace(/\s+/g, "-"),
}));
// this slug just turns it into app5 -> app-5 for the sake of the URL
