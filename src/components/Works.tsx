"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRaf } from "@/hooks/useRaf";
import { works } from "@/lib/works";
import SectionLabel from "./ui/SectionLabel";

/**
 * 施工事例ギャラリー。
 *
 * 768px 以上のマウス環境では、縦スクロール量を横移動に変換するピン留め表示。
 * それ未満、タッチ環境、reduced-motion では通常の横スワイプに退避する。
 *
 * 見出しの出し分けは CSS のブレークポイントで行う(JS の状態で切り替えると
 * ハイドレーション後に一瞬入れ替わって見えるため)。
 * - 768px 未満: スクローラーの外に通常のブロックとして置く
 * - 768px 以上: 横に流れる1枚目のパネルとして置く
 */
export default function Works() {
  const outer = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const check = () =>
      setPinned(
        window.innerWidth >= 768 &&
          window.matchMedia("(pointer: fine)").matches &&
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

  const eyebrow = (
    <p className="font-en text-[0.78rem] tracking-[0.45em] text-shinchu sm:text-[0.7rem]">
      02 — WORKS
    </p>
  );
  const title = (
    <h2 className="font-heading text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.7] tracking-[0.12em]">
      敷地が違えば、
      <br />
      納まりも変わります。
    </h2>
  );
  const lead = (
    <p className="max-w-sm text-sm leading-[2.4] text-kinari/60">
      同じ敷地は二つとありません。向き、道路との高低差、隣家との距離。条件が変われば納まりも変わるので、現場を見てから決めています。
    </p>
  );

  return (
    <section
      id="works"
      ref={outer}
      style={outerStyle}
      className="relative bg-sumi text-kinari"
    >
      <SectionLabel no="02" en="WORKS" ja="事例" tone="light" />

      {/* 768px 未満: 見出しはスクローラーの外に置く */}
      <div className="px-[var(--gutter)] pt-[var(--section-y)] pb-12 md:hidden">
        {eyebrow}
        <div className="mt-8">{title}</div>
        <div className="mt-8">{lead}</div>
        <p
          aria-hidden
          className="mt-10 font-en text-[0.68rem] tracking-[0.35em] text-kinari/35"
        >
          SWIPE →
        </p>
      </div>

      <div
        className={
          pinned
            ? "sticky top-0 flex h-[100svh] items-center overflow-hidden"
            : "flex items-center overflow-hidden pb-[var(--section-y)] md:pt-[var(--section-y)]"
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
          {/* 768px 以上: 見出しは横に流れる1枚目のパネル */}
          <div className="hidden w-[min(78vw,26rem)] shrink-0 snap-start flex-col justify-center md:flex">
            <div className="mb-8">{eyebrow}</div>
            {title}
            <div className="mt-8">{lead}</div>
            <p
              aria-hidden
              className="mt-12 font-en text-[0.68rem] tracking-[0.35em] text-kinari/35"
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
                <span className="font-en text-[0.78rem] tracking-[0.3em] text-shinchu sm:text-[0.7rem]">
                  {w.no}
                </span>
                <h3 className="font-heading text-xl tracking-[0.18em]">
                  {w.title}
                </h3>
              </div>
              <p className="mt-4 max-w-md text-sm leading-[2.3] text-kinari/60">
                {w.body}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.78rem] tracking-[0.2em] text-kinari/40 sm:text-[0.7rem]">
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
