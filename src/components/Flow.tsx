import RevealText from "./ui/RevealText";
import SectionLabel from "./ui/SectionLabel";

const steps = [
  {
    no: "01",
    title: "ご相談",
    body: "フォームよりご連絡ください。ご希望・ご予算・お困りごとを伺います。相談は無料です。",
  },
  {
    no: "02",
    title: "現地調査",
    body: "敷地を実際に拝見し、寸法・高低差・日照・周辺環境を測ります。ここが設計の出発点です。",
  },
  {
    no: "03",
    title: "設計・お見積り",
    body: "図面とパースでご提案します。仕様と金額の内訳をお示しし、納得いくまで調整します。",
  },
  {
    no: "04",
    title: "施工",
    body: "自社職人が施工します。工程は随時ご報告し、近隣への配慮も含めて管理します。",
  },
  {
    no: "05",
    title: "お引渡し・アフター",
    body: "仕上がりをご確認いただき、植栽の手入れ方法をお伝えします。以後のご相談も承ります。",
  },
];

export default function Flow() {
  return (
    <section id="flow" className="relative bg-kinari py-[var(--section-y)]">
      <SectionLabel no="05" en="FLOW" ja="流れ" />

      <div className="mx-auto max-w-[1400px] px-[var(--gutter)]">
        <p data-reveal className="mb-8 font-en text-[0.7rem] tracking-[0.45em] text-shinchu">
          05 — FLOW
        </p>
        <RevealText
          lines={["ご相談から引渡しまで。"]}
          className="font-heading text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.7] tracking-[0.12em]"
        />

        <ol className="mt-20 grid gap-px bg-[color:var(--line)] sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <li
              key={s.no}
              data-reveal
              style={{ ["--d" as string]: `${i * 90}ms` }}
              className="bg-kinari p-8"
            >
              <span className="font-en text-xs tracking-[0.3em] text-shinchu">
                {s.no}
              </span>
              <h3 className="mt-5 font-heading text-lg tracking-[0.16em]">
                {s.title}
              </h3>
              <p className="mt-4 text-xs leading-[2.2] text-sumi/65">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
