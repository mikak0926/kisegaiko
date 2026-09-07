import RevealText from "./ui/RevealText";
import RevealImage from "./ui/RevealImage";
import SectionLabel from "./ui/SectionLabel";
import CountUp from "./ui/CountUp";
import { site } from "@/lib/site";

// TODO: 代表者名・資本金・許可番号は確定次第 site.ts へ追加して差し替え
const rows: [string, string][] = [
  ["会社名", site.name],
  ["創業", `${site.founded}年`],
  ["事業内容", "外構・エクステリア工事／ブロック・フェンス工事／土間コンクリート工事／造園・植栽工事"],
  ["所在地", site.address],
  ["営業時間", site.hours],
  ["対応エリア", site.areas],
];

export default function Company() {
  return (
    <section id="company" className="relative bg-kinari pb-[var(--section-y)]">
      <SectionLabel no="06" en="COMPANY" ja="会社" />

      {/* 全幅の俯瞰カット */}
      <RevealImage
        src="/images/works-04.jpg"
        alt="完成した外構の全景"
        sizes="100vw"
        className="h-[52vh] w-full sm:h-[70vh]"
      />

      <div className="mx-auto mt-[var(--section-y)] max-w-[1400px] px-[var(--gutter)]">
        <p data-reveal className="mb-8 font-en text-[0.7rem] tracking-[0.45em] text-shinchu">
          06 — COMPANY
        </p>

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <RevealText
              lines={["伺うのも、", "施工するのも同じ人間です。"]}
              className="font-heading text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.7] tracking-[0.12em]"
            />
            <p
              data-reveal
              style={{ ["--d" as string]: "200ms" }}
              className="mt-10 max-w-md text-sm leading-[2.6] text-sumi/75"
            >
              {site.name}は{site.founded}年の創業です。現場で外構をつくってきた職人が独立して始めました。打ち合わせ、見積り、施工までを同じ人間が担当します。伝言で話が薄まることがなく、現場で判断が要る場面もその場で決められます。
            </p>

            <div
              data-reveal
              style={{ ["--d" as string]: "300ms" }}
              className="mt-14 flex items-end gap-4 border-t border-[color:var(--line)] pt-8"
            >
              <span className="font-en text-[0.65rem] tracking-[0.3em] text-sumi/45">
                FOUNDED
              </span>
              <span className="font-en text-[clamp(3rem,7vw,5rem)] leading-none text-shinchu">
                <CountUp to={site.founded} />
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pt-4">
            <dl className="border-t border-[color:var(--line)]">
              {rows.map(([k, v], i) => (
                <div
                  key={k}
                  data-reveal
                  style={{ ["--d" as string]: `${i * 70}ms` }}
                  className="grid gap-2 border-b border-[color:var(--line)] py-6 sm:grid-cols-4 sm:gap-8"
                >
                  <dt className="text-xs tracking-[0.24em] text-sumi/50 sm:col-span-1">
                    {k}
                  </dt>
                  <dd className="text-sm leading-[2.2] text-sumi/85 sm:col-span-3">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
