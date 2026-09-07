"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

/**
 * 初回のみ表示するローディング。
 * 社名が浮かび上がったあと、上下に幕が割れて Hero が現れる。
 */
export default function Loading() {
  const [phase, setPhase] = useState<"idle" | "open" | "done">("idle");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done");
      return;
    }
    if (sessionStorage.getItem("kise-opened")) {
      setPhase("done");
      return;
    }

    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setPhase("open"), 1500);
    const t2 = setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem("kise-opened", "1");
      document.body.style.overflow = "";
    }, 3100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  const curtain =
    "absolute inset-x-0 h-1/2 bg-sumi transition-transform duration-[1400ms] [transition-timing-function:var(--ease)]";

  return (
    <div aria-hidden className="fixed inset-0 z-[100] overflow-hidden">
      <div
        className={`${curtain} top-0 ${phase === "open" ? "-translate-y-full" : ""}`}
      />
      <div
        className={`${curtain} bottom-0 ${phase === "open" ? "translate-y-full" : ""}`}
      />
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
          phase === "open" ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="overflow-hidden">
          <p className="animate-[rise_1.2s_var(--ease)_forwards] font-heading text-2xl tracking-[0.6em] text-kinari sm:text-3xl">
            {site.name}
          </p>
        </div>
      </div>
    </div>
  );
}
