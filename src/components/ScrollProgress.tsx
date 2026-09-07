"use client";

import { useCallback, useRef } from "react";
import { useRaf } from "@/hooks/useRaf";

/** 画面上部 1px の真鍮色ライン。 */
export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  const onScroll = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? window.scrollY / max : 0;
    el.style.transform = `scaleX(${Math.min(1, Math.max(0, p))})`;
  }, []);

  useRaf(onScroll);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-px"
    >
      <div
        ref={ref}
        className="h-full origin-left bg-shinchu"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
