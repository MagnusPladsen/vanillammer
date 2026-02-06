"use client";

import { useEffect } from "react";

export function BackgroundMotion() {
  useEffect(() => {
    let raf = 0;

    const update = () => {
      const scrollY = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const progress = height > 0 ? scrollY / height : 0;
      const offset = Math.min(40, progress * 40);
      const shimmer = Math.min(1, 0.2 + progress * 0.6);
      document.documentElement.style.setProperty("--bg-shift", `${offset}px`);
      document.documentElement.style.setProperty("--bg-shimmer", `${shimmer}`);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
