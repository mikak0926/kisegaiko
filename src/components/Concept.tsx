import RevealText from "./ui/RevealText";
import RevealImage from "./ui/RevealImage";
import SectionLabel from "./ui/SectionLabel";
import Parallax from "./Parallax";

export default function Concept() {
  return (
    <section
      id="concept"
      className="relative bg-kinari py-[var(--section-y)]"
    >
      <SectionLabel no="01" en="CONCEPT" ja="意匠" />

      <div className="mx-auto grid max-w-[1400px] gap-16 px-[var(--gutter)] lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5 lg:pt-16">
          <p
            data-reveal
            className="mb-8 font-en text-[0.7rem] tracking-[0.45em] text-shinchu"
          >
            01 — CONCEPT
          </p>

          <RevealText
            lines={["外構は、", "建築の続きである。"]}
            className="font-heading text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.7] tracking-[0.12em]"
          />

          <div
            data-reveal
            style={{ ["--d" as string]: "200ms" }}
            className="mt-10 space-y-7 text-sm leading-[2.6] text-sumi/75 sm:text-base"
          >
            <p>
              私たちは外構を、建物ができたあとの「余り」だとは考えていません。道路から玄関までの動線、隣家との距離のとり方、風の抜ける方向。それらを整えることは、住まいそのものを設計することと同じです。
            </p>
            <p>
              だから喜瀬外構は、素材を多用しません。壁・土間・植栽——限られた要素の面積比と余白だけで景色をつくります。引き算の先に残るものこそが、年月を重ねても古びない品格になると考えています。
            </p>
          </div>

          <div data-reveal style={{ ["--d" as string]: "320ms" }} className="mt-12">
            <a href="#works" className="btn-line text-sumi">
              <span>施工事例を見る</span>
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <Parallax speed={-0.04}>
            <RevealImage
              src="/images/concept.jpg"
              alt="コンクリートの塀と飛石のアプローチ"
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="aspect-[4/3] w-full"
            />
          </Parallax>
          <div className="mt-6 flex items-start justify-end gap-8">
            <p
              data-reveal
              style={{ ["--d" as string]: "240ms" }}
              className="shrink-0 font-en text-[0.65rem] tracking-[0.3em] text-sumi/40"
            >
              FIG. 01
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
