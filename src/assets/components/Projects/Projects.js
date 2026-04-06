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
    description: `s`,
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
    id: "lunalytics",
    name: "Lunalytics",
    category: "Software",
    date: "18/09/26",
    author: "KSJaay",
    description: `
When I first started self hosting, I wanted to be able to monitor all my applications and servers.

So, I spent a while testing various different paid and self hosted monitoring services, but always felt like something was missing.

The application that came closest to all my requirements was **Uptime-Kuma**, but it still lacked a lot of things I wanted:

- UI felt cluttered (especially on mobile)
- Customisation at the time was pretty much none existent for status pages
- I wanted an application that would support multiple users with custom permissions.

So, I thought why not spend a little bit of time to create my own application. Initially I wanted to spend around a month, but some how 2+ years later I'm still here developing new features. 

I spent countless hours adding various features, that have gone way above the original plan because I wanted to create something that's actually useful for users and not just a half baked application.

`,
    link: "https://lunalytics.xyz/",
    image: "https://arjun.needs-to-s.top/4rZ1ahY.png",
    creator: true,
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
