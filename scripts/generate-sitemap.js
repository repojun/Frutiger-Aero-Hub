import fs from "fs";
import { miniApps } from "../src/assets/components/Content/MiniApps.js";
import { projects } from "../src/assets/components/Content/Projects.js";
const DOMAIN = "https://frutiger-aero.online";

const staticRoutes = ["/", "/about", "/resources", "/discover", "/apps", "/weather", "/guestbook", "/msn"];

function url(loc) {
  return `
  <url>
    <loc>${DOMAIN}${loc}</loc>
  </url>`;
}

const projectRoutes = projects.map((p) => `/project/${p.slug}`);
const appRoutes = miniApps.map((a) => `/apps/${a.slug}`);

const allRoutes = [...staticRoutes, ...projectRoutes, ...appRoutes];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(url).join("\n")}
</urlset>`;

fs.writeFileSync("public/sitemap.xml", sitemap);

console.log("sitemap generated successfully");
