"use client";

import { useEffect } from "react";

const SELECTOR = "[data-reveal],[data-reveal-clip],[data-reveal-line]";

/**
 * リビール系の唯一の IntersectionObserver。
 * JS は .is-in を付けるだけで、見え方は globals.css が持つ。
 *
 * IO に加えてスクロール時の手動判定も併用する。IO は要素が
 * clip されている・タブが非表示などの条件で発火しないことがあり、
 * 一度取りこぼすと二度と表示されないため。
 */
export default function RevealEngine() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll(SELECTOR));

    const reveal = (el: Element) => el.classList.add("is-in");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target); // 一度出たら戻さない
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    targets.forEach((el) => io.observe(el));

    // 取りこぼしの保険。視界に入っている未表示要素を拾う。
    const sweep = () => {
      const limit = window.innerHeight * 0.92;
      for (const el of targets) {
        if (el.classList.contains("is-in")) continue;
        const r = el.getBoundingClientRect();
        if (r.top < limit && r.bottom > 0) {
          reveal(el);
          io.unobserve(el);
        }
      }
    };
    sweep();
    window.addEventListener("scroll", sweep, { passive: true });
    window.addEventListener("resize", sweep, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", sweep);
      window.removeEventListener("resize", sweep);
    };
  }, []);

  return null;
}
