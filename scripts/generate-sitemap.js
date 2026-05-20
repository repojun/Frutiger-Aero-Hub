import fs from "fs";
import { miniApps } from "../src/assets/components/Content/MiniApps.js";
import { projects } from "../src/assets/components/Content/Projects.js";

const DOMAIN = "https://frutiger-aero.online";

const staticRoutes = [
  "/",
  "/about",
  "/resources",
  "/discover",
  "/apps",
  "/weather",
  "/guestbook",
  "/msn"
];

function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function url(loc) {
  const fullUrl = escapeXml(`${DOMAIN}${loc}`);
  const today = new Date().toISOString().split("T")[0];

  return `
  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${today}</lastmod>
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