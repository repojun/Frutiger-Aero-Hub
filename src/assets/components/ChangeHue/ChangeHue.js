import { SoundPlayer } from "../SoundPlayer/SoundPlayer";
export function changeHue(newHueValue) {
  const container = document.querySelector(".main-container");
  const sidebarblur = document.querySelector(".side-bar");
  const particle = document.querySelector(".particle");
  const circle = document.querySelector(".circle");
  const circle2 = document.querySelector(".circle2");
  SoundPlayer("click");

  const newValue = newHueValue - 50;
  if (!container) return;

  container.style.setProperty("--aurora-filter", `hue-rotate(${newHueValue}deg) saturate(135%)`);
  sidebarblur.style.setProperty("--aurora-filter-blur", `hue-rotate(${newValue + 20}deg) saturate(100%)`);
  circle.style.setProperty("--aurora-filter", `hue-rotate(${newValue}deg) saturate(100%) blur(5rem)`);
  circle2.style.setProperty("--aurora-filter", `hue-rotate(${newValue}deg) saturate(100%) blur(5rem)`);
}
