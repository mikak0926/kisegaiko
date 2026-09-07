"use client";

import { useEffect, useRef, useState } from "react";

/** デスクトップのみ。わずかに遅れて追従し、画像ホバーで拡大して VIEW を出す。 */
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hot, setHot] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    setEnabled(true);
    document.body.classList.add("cursor-host");

    const pos = { x: innerWidth / 2, y: innerHeight / 2 };
    const cur = { ...pos };
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      setHot(Boolean((e.target as HTMLElement).closest("[data-cursor='view']")));
    };

    const tick = () => {
      cur.x += (pos.x - cur.x) * 0.16;
      cur.y += (pos.y - cur.y) * 0.16;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${cur.x}px, ${cur.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("pointermove", onMove);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.body.classList.remove("cursor-host");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none fixed left-0 top-0 z-[90] flex items-center justify-center rounded-full border border-shinchu text-[0.6rem] tracking-[0.2em] text-kinari transition-[width,height,background-color] duration-500 [transition-timing-function:var(--ease)] ${
        hot ? "h-20 w-20 bg-shinchu" : "h-3 w-3 bg-shinchu/70"
      }`}
    >
      <span
        className={`transition-opacity duration-300 ${hot ? "opacity-100" : "opacity-0"}`}
      >
        VIEW
      </span>
    </div>
  );
}
