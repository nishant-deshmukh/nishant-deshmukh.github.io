import { useEffect } from "react";
          
      

// Cloud trail: small white clouds with a blue outline appear from the
// bottom of the mouse arrow and drift away as they fade out.
// - Desktop only (turns off on phones and tablets).
// - Turns off for visitors who prefer reduced motion.
// To change the look, edit the values below.

const OUTLINE_COLORS = ["#0176D3", "#1B96FF"]; // Salesforce blues for the border
const FILL_COLOR = "#FFFFFF"; // inside of each cloud
const OUTLINE_WIDTH = 1.5; // border thickness in px
// Where the trail starts, measured from the arrow's tip.
// (10, 20) is roughly the bottom of a standard arrow pointer.
const OFFSET_X = 10;
const OFFSET_Y = 20;
const SPAWN_EVERY_MS = 45; // lower = more clouds
const LIFETIME_MS = 650; // how long each cloud stays
const MIN_SIZE = 14; // px
const MAX_SIZE = 26; // px
const MAX_CLOUDS = 30; // safety cap

const CLOUD_PATH =
  "M52 100c-24 0-42-15-42-35 0-19 16-34 37-35C55 13 74 2 96 2c27 0 49 17 53 40 22 1 41 16 41 34 0 13-10 24-24 24H52z";

const CloudTrail = () => {
  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return undefined;

    const layer = document.createElement("div");
    layer.setAttribute("aria-hidden", "true");
    Object.assign(layer.style, {
      position: "fixed",
      inset: "0",
      pointerEvents: "none",
      zIndex: "9999",
      overflow: "hidden",
    });
    document.body.appendChild(layer);

    let lastSpawn = 0;
    let count = 0;

    const spawn = (x, y) => {
      if (count >= MAX_CLOUDS) return;
      count += 1;

      const size = MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE);
      const outline = OUTLINE_COLORS[Math.floor(Math.random() * OUTLINE_COLORS.length)];
      const driftX = (Math.random() - 0.5) * 20;
      const driftY = 10 + Math.random() * 14; // drift downward, away from the arrow

      const svgNS = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(svgNS, "svg");
      svg.setAttribute("viewBox", "-8 -8 216 126");
      svg.setAttribute("width", String(size));
      svg.setAttribute("height", String(size * 0.55));
      const path = document.createElementNS(svgNS, "path");
      path.setAttribute("d", CLOUD_PATH);
      path.setAttribute("fill", FILL_COLOR);
      path.setAttribute("stroke", outline);
      path.setAttribute("stroke-width", String(OUTLINE_WIDTH));
      path.setAttribute("stroke-linejoin", "round");
      path.setAttribute("vector-effect", "non-scaling-stroke");
      svg.appendChild(path);

      Object.assign(svg.style, {
        position: "absolute",
        left: `${x + OFFSET_X - size / 2}px`,
        top: `${y + OFFSET_Y - size * 0.29}px`,
        opacity: "1",
        filter: "drop-shadow(0 2px 4px rgba(1, 118, 211, 0.18))",
      });
      layer.appendChild(svg);

      const animation = svg.animate(
        [
          { transform: "translate(0, 0) scale(0.6)", opacity: 1 },
          { transform: `translate(${driftX}px, ${driftY}px) scale(1.1)`, opacity: 0 },
        ],
        { duration: LIFETIME_MS, easing: "ease-out" }
      );

      animation.onfinish = () => {
        svg.remove();
        count -= 1;
      };
    };

    const onMove = (event) => {
      const now = performance.now();
      if (now - lastSpawn < SPAWN_EVERY_MS) return;
      lastSpawn = now;
      spawn(event.clientX, event.clientY);
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      layer.remove();
    };
  }, []);

  return null;
};

export default CloudTrail;