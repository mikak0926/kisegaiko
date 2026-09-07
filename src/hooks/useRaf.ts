"use client";

import { useEffect } from "react";

type Sub = (scrollY: number) => void;

const subs = new Set<Sub>();
let running = false;

function loop() {
  const y = window.scrollY;
  subs.forEach((fn) => fn(y));
  if (subs.size > 0) {
    requestAnimationFrame(loop);
  } else {
    running = false;
  }
}

/** スクロール連動処理を単一の rAF ループに集約する(scroll イベント直結は避ける)。 */
export function useRaf(fn: Sub, enabled = true) {
  useEffect(() => {
    if (!enabled) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    subs.add(fn);
    if (!running) {
      running = true;
      requestAnimationFrame(loop);
    }
    return () => {
      subs.delete(fn);
    };
  }, [fn, enabled]);
}
