import { useEffect } from "react";

const SCRIPTS = [
  "/assets/js/jquery-3.7.1.min.js",
  "/assets/js/phosphor-icon.js",
  "/assets/js/boostrap.bundle.min.js",
  "/assets/js/aos.js",
  "/assets/js/magnific-popup.min.js",
  "/assets/js/jquery.marquee.min.js",
  "/assets/js/purecounter.js",
  "/assets/js/swiper-bundle.min.js",
  "/assets/js/gsap/gsap.js",
  "/assets/js/gsap/gsap-scroll-to-plugin.js",
  "/assets/js/gsap/gsap-scroll-smoother.js",
  "/assets/js/gsap/gsap-scroll-trigger.js",
  "/assets/js/gsap/gsap-split-text.js",
  "/assets/js/gsap/chroma.min.js",
  "/assets/js/slider-active.js",
  "/assets/js/custom-gsap.js",
  "/assets/js/main.js",
  "/assets/js/tw-cursor.js",
];

let loadPromise = null;

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

function ensureScripts() {
  if (!loadPromise) {
    loadPromise = (async () => {
      for (const src of SCRIPTS) {
        await loadScript(src);
      }
      // The template scripts (main.js / custom-gsap.js) register
      // "DOMContentLoaded" listeners for the preloader timeline and the
      // image-clip effect. DOMContentLoaded already fired before these
      // dynamically injected scripts ran, so trigger the handlers manually.
      document.dispatchEvent(new Event("DOMContentLoaded"));
    })();
  }
  return loadPromise;
}

export default function useTemplateScripts() {
  useEffect(() => {
    ensureScripts().catch((err) => console.error(err));
  }, []);
}