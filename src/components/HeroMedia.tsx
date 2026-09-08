"use client";

import { useEffect, useState } from "react";

type NetworkInformation = { saveData?: boolean; effectiveType?: string };

/**
 * ヒーローの背景メディア。
 *
 * 静止画は <picture> でアートディレクションを切り替える。横長(21:9)の
 * 画像を縦長の画面に object-cover で流し込むと、構図が破綻するうえに
 * next/image が画面幅相当の小さいソースを選んでしまい極端にぼやけるため、
 * 768px 未満は専用の縦構図カットを配信する。
 *
 * 動画は条件を満たす環境でだけ静止画の上に重ねてフェードインさせる。
 * 動画を出さない場合は静止画側にケンバーンズを効かせ、動きが二重にならない
 * ようにする。
 */
export default function HeroMedia() {
  const [useVideo, setUseVideo] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = window.innerWidth >= 768;
    const conn = (navigator as Navigator & { connection?: NetworkInformation })
      .connection;
    const thrifty =
      Boolean(conn?.saveData) || /(^|-)2g$/.test(conn?.effectiveType ?? "");

    setUseVideo(wide && !reduce && !thrifty);
  }, []);

  return (
    <div className="absolute inset-0">
      <picture>
        <source media="(max-width: 767px)" srcSet="/images/hero-sp.jpg" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero.jpg"
          alt="木天井のカーポートと洗い出し土間のある外構"
          fetchPriority="high"
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover ${
            useVideo ? "" : "kenburns"
          }`}
        />
      </picture>

      {useVideo && (
        <video
          poster="/images/hero.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
          onCanPlay={() => setReady(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 [transition-timing-function:var(--ease)] ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  );
}
