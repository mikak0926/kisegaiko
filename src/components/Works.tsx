"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRaf } from "@/hooks/useRaf";
import { works } from "@/lib/works";
import SectionLabel from "./ui/SectionLabel";

/**
 * 縦スクロール量を横移動に変換するピン留めギャラリー。
 * 768px 未満、および reduced-motion 時は通常の横スワイプに退避する。
 */
export default function Works() {
  const outer = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const check = () =>
      setPinned(
        window.innerWidth >= 768 &&
          !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      );
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const onScroll = useCallback(
    (y: number) => {
      const sec = outer.current;
      const tr = track.current;
      if (!pinned || !sec || !tr) return;

      const top = sec.offsetTop;
      const distance = sec.offsetHeight - window.innerHeight;
      if (distance <= 0) return;

      const p = Math.min(1, Math.max(0, (y - top) / distance));
      const travel = Math.max(0, tr.scrollWidth - window.innerWidth);
      tr.style.transform = `translate3d(${-p * travel}px, 0, 0)`;
    },
    [pinned],
  );
  useRaf(onScroll, pinned);

  // カード枚数 + 見出し分の横幅を、縦スクロールの高さに換算する
  const outerStyle = pinned
    ? { height: `${(works.length + 1) * 62}vh` }
    : undefined;

  return (
    <section
      id="works"
      ref={outer}
      style={outerStyle}
      className="relative bg-sumi text-kinari"
    >
      <SectionLabel no="02" en="WORKS" ja="事例" tone="light" />

      <div
        className={
          pinned
            ? "sticky top-0 flex h-[100svh] items-center overflow-hidden"
            : "flex items-center overflow-hidden py-[var(--section-y)]"
        }
      >
        <div
          ref={track}
          className={
            pinned
              ? "flex w-max gap-[clamp(1.5rem,4vw,4rem)] px-[var(--gutter)] will-change-transform"
              : "flex w-full snap-x snap-mandatory gap-6 overflow-x-auto px-[var(--gutter)] pb-6 [scrollbar-width:none]"
          }
        >
          {/* 先頭のカードは見出しそのもの */}
          <div className="flex w-[min(78vw,26rem)] shrink-0 snap-start flex-col justify-center">
            <p className="mb-8 font-en text-[0.7rem] tracking-[0.45em] text-shinchu">
              02 — WORKS
            </p>
            <h2 className="font-heading text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.7] tracking-[0.12em]">
              一邸ごとに、
              <br />
              答えは違う。
            </h2>
            <p className="mt-8 max-w-sm text-sm leading-[2.4] text-kinari/60">
              同じ図面を二度使ったことはありません。
              敷地の向き、家族の暮らし方、隣家との関係。
              条件が違えば、最適な形も変わります。
            </p>
            <p
              aria-hidden
              className="mt-12 font-en text-[0.6rem] tracking-[0.35em] text-kinari/35"
            >
              {pinned ? "SCROLL →" : "SWIPE →"}
            </p>
          </div>

          {works.map((w) => (
            <article
              key={w.id}
              data-cursor="view"
              className="group w-[min(82vw,34rem)] shrink-0 snap-start"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={w.image}
                  alt={`${w.title} — ${w.place}`}
                  fill
                  sizes="(max-width: 768px) 82vw, 34rem"
                  className="object-cover transition-transform duration-[1200ms] [transition-timing-function:var(--ease)] group-hover:scale-[1.06]"
                />
              </div>

              <div className="mt-7 flex items-baseline gap-5">
                <span className="font-en text-xs tracking-[0.3em] text-shinchu">
                  {w.no}
                </span>
                <h3 className="font-heading text-xl tracking-[0.18em]">
                  {w.title}
                </h3>
              </div>
              <p className="mt-4 max-w-md text-sm leading-[2.3] text-kinari/60">
                {w.body}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.7rem] tracking-[0.2em] text-kinari/40">
                <span>{w.place}</span>
                <span className="h-px w-6 bg-kinari/25" />
                <span className="font-en">{w.year}</span>
                <span className="h-px w-6 bg-kinari/25" />
                <span>{w.tags.join(" / ")}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
