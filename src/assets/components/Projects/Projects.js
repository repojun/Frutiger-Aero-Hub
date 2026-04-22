export const projects = [
  {
    id: "portfolio",
    name: "My Portfolio",
    description: `
Here's my original website portfolio, it was my first ever Frutiger Aero website. 

It's just a page to show off some of my projects, show what I do and also has some silly lil widgets
here and here. It captures a time where I was just starting out with the design style and it's nice to see how my designs have changed over the years. 

Also, try figure out how to get your score up!
`,
    link: "https://www.craftedbyarjun.com/",
    image: "https://arjun.needs-to-s.top/4gSaeXF.png",
  },
  {
    id: "google",
    name: "Aero Search Page",
    description: `
This is my Aero Search Page, its just a nice theme to browse with and use as a homescreen for your browser. 

It just acts as a wrapper (even tho its not really a wrapper) for google, brave and duckduckgo searching. I use the Custom New Tab URL extension to get it working whenever i open a tab.

`,
    link: "https://www.craftedbyarjun.com/home",
    image: "https://arjun.needs-to-s.top/6UeNuGm.png",
  },
  {
    id: "reddit-design",
    name: "Reddit Design",
    description: `
This was my take on turning the Frutiger Aero Reddit page into an actual Frutiger Aero theme. 

It's just a design concept right now that you can explore, I used many sources and it came out really nicely imo.

I decided to make it interactable so its more entertaining to use, I was hoping to attach the reddit API and make it a fully fledged reskin for Reddit but I haven't gotten to it yet.

`,
    link: "https://www.craftedbyarjun.com/reddit",
    image: "https://arjun.needs-to-s.top/9E1tzSG.jpg",
  },
  {
    id: "aero-archive",
    name: "Frutiger Aero Archive",
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
    link: "https://voicesync.modsync.app/",
    image: "https://arjun.needs-to-s.top/75LLvxT.png",
  },
].map((project) => ({
  ...project,
  slug: project.name.toLowerCase().replace(/\s+/g, "-"),
}));
// this slug just turns it into app5 -> app-5 for the sake of the URL
