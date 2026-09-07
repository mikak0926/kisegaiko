"use client";

import { useEffect } from "react";

const SELECTOR = "[data-reveal],[data-reveal-clip],[data-reveal-line]";

/**
 * リビール系の唯一の IntersectionObserver。
 * JS は .is-in を付けるだけで、見え方は globals.css が持つ。
 */
export default function RevealEngine() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll(SELECTOR));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target); // 一度出たら戻さない
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
