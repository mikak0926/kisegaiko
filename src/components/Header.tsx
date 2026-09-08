"use client";

import { useCallback, useEffect, useState } from "react";
import { useRaf } from "@/hooks/useRaf";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  const onScroll = useCallback((y: number) => {
    setSolid(y > window.innerHeight * 0.7);
  }, []);
  useRaf(onScroll);

  // メニュー展開中は背面をロックする
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const light = !solid && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-700 [transition-timing-function:var(--ease)] ${
          solid && !open
            ? "bg-kinari/92 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-[max(1.25rem,4vw)] py-6">
          <a
            href="#top"
            className={`inline-block py-2 font-heading text-lg tracking-[0.4em] transition-colors duration-500 ${
              light || open ? "text-kinari" : "text-sumi"
            }`}
          >
            {site.name}
          </a>

          <nav className="hidden items-center gap-10 lg:flex">
            {nav.slice(0, 5).map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`group relative text-xs tracking-[0.28em] transition-colors duration-500 ${
                  light ? "text-kinari/85" : "text-sumi/75"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-shinchu transition-transform duration-500 [transition-timing-function:var(--ease)] group-hover:scale-x-100" />
              </a>
            ))}
            <a
              href="#contact"
              className={`btn-line !px-7 !py-3 ${light ? "text-kinari" : "text-sumi"}`}
            >
              <span>CONTACT</span>
            </a>
          </nav>

          <button
            type="button"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-[70] flex h-11 w-11 flex-col items-center justify-center gap-[7px] lg:hidden"
          >
            {[0, 1].map((i) => (
              <span
                key={i}
                className={`block h-px w-7 transition-all duration-500 [transition-timing-function:var(--ease)] ${
                  light || open ? "bg-kinari" : "bg-sumi"
                } ${
                  open
                    ? i === 0
                      ? "translate-y-[4px] rotate-[18deg]"
                      : "-translate-y-[4px] -rotate-[18deg]"
                    : ""
                }`}
              />
            ))}
          </button>
        </div>
      </header>

      {/* 全画面メニュー: 幕が下り、リンクが順にせり上がる */}
      <div
        className={`fixed inset-0 z-[65] lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 origin-top bg-sumi transition-transform duration-[900ms] [transition-timing-function:var(--ease)] ${
            open ? "scale-y-100" : "scale-y-0"
          }`}
        />
        <nav className="relative flex h-full flex-col justify-center gap-1 px-[max(1.75rem,8vw)]">
          {nav.map((item, i) => (
            <span key={item.id} className="block overflow-hidden py-2">
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className="flex items-baseline gap-5 py-1.5 transition-transform duration-[900ms] [transition-timing-function:var(--ease)]"
                style={{
                  transform: open ? "none" : "translateY(110%)",
                  transitionDelay: open ? `${180 + i * 60}ms` : "0ms",
                }}
              >
                <span className="font-en text-xs tracking-[0.3em] text-shinchu">
                  0{i + 1}
                </span>
                <span className="font-heading text-[1.6rem] tracking-[0.16em] text-kinari sm:text-3xl sm:tracking-[0.2em]">
                  {item.label}
                </span>
                <span className="hidden font-en text-[0.65rem] tracking-[0.3em] text-kinari/40 sm:inline">
                  {item.en}
                </span>
              </a>
            </span>
          ))}
        </nav>
      </div>
    </>
  );
}
