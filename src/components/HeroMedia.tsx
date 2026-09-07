"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type NetworkInformation = { saveData?: boolean; effectiveType?: string };

/**
 * ヒーローの背景メディア。
 * 静止画を常に敷き、条件を満たす環境でだけ動画を重ねてフェードインさせる。
 * 動画を出さない場合は静止画側にケンバーンズを効かせ、動きが二重にならないようにする。
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
      <Image
        src="/images/hero.jpg"
        alt="木天井のカーポートと洗い出し土間のある外構"
        fill
        priority
        sizes="100vw"
        quality={90}
        className={`object-cover ${useVideo ? "" : "kenburns"}`}
      />

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
