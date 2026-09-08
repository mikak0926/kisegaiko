import RevealText from "./ui/RevealText";
import SectionLabel from "./ui/SectionLabel";

const services = [
  {
    no: "01",
    title: "門まわり・アプローチ",
    en: "GATE & APPROACH",
    body: "門柱、門扉、表札、ポスト、飛石やタイルのアプローチ。道路から玄関までの一式を承ります。",
  },
  {
    no: "02",
    title: "カーポート・パーゴラ",
    en: "CARPORT & PERGOLA",
    body: "既製品のカーポートから、木や鉄を使った造作の屋根まで。柱の位置と土間の割付は現場で合わせます。",
  },
  {
    no: "03",
    title: "植栽・シンボルツリー",
    en: "PLANTING",
    body: "樹種の選定から植え付け、下草まで。数年後の樹形を見越して、育つ余白を残して植えます。",
  },
  {
    no: "04",
    title: "土間・塀・フェンス",
    en: "PAVING & FENCE",
    body: "洗い出し土間、左官壁、木製・アルミの目隠しフェンス。素材の質感と割付にこだわります。",
  },
];

export default function Service() {
  return (
    <section id="service" className="relative bg-kinari py-[var(--section-y)]">
      <SectionLabel no="04" en="SERVICE" ja="業務" />

      <div className="mx-auto max-w-[1400px] px-[var(--gutter)]">
        <p data-reveal className="mb-8 font-en text-[0.78rem] sm:text-[0.7rem] tracking-[0.45em] text-shinchu">
          04 — SERVICE
        </p>
        <RevealText
          lines={["門まわりから土間まで、", "一括して承ります。"]}
          className="font-heading text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.7] tracking-[0.12em]"
        />

        <div className="mt-20 border-t border-[color:var(--line)]">
          {services.map((s, i) => (
            <div
              key={s.no}
              data-reveal
              style={{ ["--d" as string]: `${i * 90}ms` }}
              className="group grid gap-4 border-b border-[color:var(--line)] py-10 md:grid-cols-12 md:items-baseline md:gap-8"
            >
              <span className="font-en text-xs tracking-[0.3em] text-shinchu md:col-span-1">
                {s.no}
              </span>
              <h3 className="font-heading text-xl tracking-[0.18em] md:col-span-4">
                {s.title}
                <span className="mt-2 block font-en text-[0.68rem] sm:text-[0.6rem] tracking-[0.3em] text-sumi/40">
                  {s.en}
                </span>
              </h3>
              <p className="text-sm leading-[2.4] text-sumi/70 md:col-span-7">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
