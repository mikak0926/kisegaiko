import HeroMedia from "./HeroMedia";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden">
      <HeroMedia />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-sumi/50 via-sumi/15 to-sumi/85"
      />

      <div className="relative flex h-full flex-col justify-end px-[max(1.25rem,4vw)] pb-[max(4rem,12vh)]">
        <p
          data-reveal
          style={{ ["--d" as string]: "1900ms" }}
          className="mb-6 font-en text-[0.7rem] tracking-[0.5em] text-kinari/75"
        >
          {site.nameEn} — EXTERIOR ARCHITECTURE
        </p>

        <h1 data-reveal-line className="text-kinari">
          <span className="line">
            <span
              style={{ ["--d" as string]: "2000ms" }}
              className="block font-heading text-[clamp(2.25rem,7vw,5.5rem)] leading-[1.35] tracking-[0.1em]"
            >
              家の輪郭を、
            </span>
          </span>
          <span className="line">
            <span
              style={{ ["--d" as string]: "2140ms" }}
              className="block font-heading text-[clamp(2.25rem,7vw,5.5rem)] leading-[1.35] tracking-[0.1em]"
            >
              風景にする。
            </span>
          </span>
        </h1>

        <p
          data-reveal
          style={{ ["--d" as string]: "2500ms" }}
          className="mt-8 max-w-md text-sm leading-[2.4] text-kinari/85 sm:text-base"
        >
          門から玄関までのわずか数歩に、住まいの品格は表れます。
          <br />
          設計から施工まで、一邸ごとに向き合う外構をつくっています。
        </p>
      </div>

      {/* スクロール誘導 */}
      <div
        aria-hidden
        data-reveal
        style={{ ["--d" as string]: "2800ms" }}
        className="absolute bottom-0 right-[max(1.25rem,4vw)] hidden flex-col items-center gap-4 sm:flex"
      >
        <span className="vertical font-en text-[0.6rem] tracking-[0.4em] text-kinari/60">
          SCROLL
        </span>
        <span className="relative block h-20 w-px bg-kinari/25">
          <span className="absolute inset-x-0 top-0 h-8 animate-[scrollcue_2.4s_var(--ease)_infinite] bg-shinchu" />
        </span>
      </div>
    </section>
  );
}
