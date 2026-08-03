export const projects = [
  {
    id: "portfolio",
    name: "My Portfolio",
    author: "Bahpu",
    description: `
Here's my original website portfolio, it was my first ever Frutiger Aero website. 

It's just a page to show off some of my projects, show what I do and also has some silly lil widgets
here and here. It captures a time where I was just starting out with the design style and it's nice to see how my designs have changed over the years. 

Also, try figure out how to get your score up!
`,
    link: "https://www.craftedbyarjun.com/",
    image: "/projects/portfolio.webp",
    creator: true,
  },
  {
    id: "google",
    name: "Aero Search Page",
    author: "Bahpu",
    category: "Website",
    date: "icantremember...",

    description: `
This is my Aero Search Page, its just a nice theme to browse with and use as a homescreen for your browser. 

It just acts as a wrapper (even tho its not really a wrapper) for google, brave and duckduckgo searching. I use the Custom New Tab URL extension to get it working whenever i open a tab.

`,
    link: "https://www.craftedbyarjun.com/home",
    image: "/projects/homepage.webp",
    creator: true,
  },
  {
    id: "reddit-design",
    name: "Reddit Design",
    author: "Bahpu",
    category: "Website",
    date: "icantremember...",
    description: `
This was my take on turning the Frutiger Aero Reddit page into an actual Frutiger Aero theme. 

It's just a design concept right now that you can explore, I used many sources and it came out really nicely imo.

I decided to make it interactable so its more entertaining to use, I was hoping to attach the reddit API and make it a fully fledged reskin for Reddit but I haven't gotten to it yet.

`,
    link: "https://www.craftedbyarjun.com/reddit",
    image: "/projects/reddit.webp",
  },
  {
    id: "aero-archive",
    name: "Frutiger Aero Archive",
    category: "Website",
    date: "N/A",
    author: "Daniele",
    description: `
 A digital museum and tribute to old 2000s aesthetics, notably Frutiger Aero which it is named after and is primarily representing, but also other styles such as Y2K, Vectordelia (also called Frutiger Metro), and others. On this site you will find large collections of wallpapers, music from a variety of styles popular during the era, old videos, flash games, PNG images to make your own collages, 
 a huge list of customization software, and many more goodies.

`,
    link: "https://frutigeraeroarchive.org/",
    image: "/projects/aeroarchive.webp",
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
    image: "/projects/lunalytics.webp",
    creator: true,
  },
  {
    id: "perfect-hue",
    name: "Perfect Hue",
    description: `
Perfect Hue is an incredibly talented 3D digital artist, he creates many stunning Frutiger Aero, DORFic and Aurora images that really capture the vibe amazingly.

I highly recommend checking out his work, it's the best I have ever seen in this space.

`,
    link: "https://perfecthue.com/wallpapers",
    image: "/projects/phue.webp",
    author: "Perfect Hue",
    category: "Wallpapers",
    date: "N/A",
  },
].map((project) => ({
  ...project,
  slug: project.id,
}));
// this slug just turns it into app5 -> app-5 for the sake of the URL
