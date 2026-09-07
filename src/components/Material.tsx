import RevealText from "./ui/RevealText";
import RevealImage from "./ui/RevealImage";
import SectionLabel from "./ui/SectionLabel";

const notes = [
  {
    src: "/images/material-01.jpg",
    alt: "杉板の木目と左官仕上げの壁のディテール",
    title: "木と左官",
    body: "木は経年で色を落ち着かせ、左官は光の角度で表情を変えます。どちらも「完成した瞬間が頂点ではない」素材です。",
  },
  {
    src: "/images/material-02.jpg",
    alt: "洗い出し仕上げの土間と御影石の見切り",
    title: "土間と石",
    body: "洗い出しの粒度、目地の割付、見切りの一本。歩く人の目には入らない寸法にこそ、施工の精度が出ます。",
  },
];

export default function Material() {
  return (
    <section id="material" className="relative bg-sumi py-[var(--section-y)] text-kinari">
      <SectionLabel no="03" en="MATERIAL" ja="素材" tone="light" />

      <div className="mx-auto max-w-[1400px] px-[var(--gutter)]">
        <p data-reveal className="mb-8 font-en text-[0.7rem] tracking-[0.45em] text-shinchu">
          03 — MATERIAL
        </p>
        <RevealText
          lines={["手が触れるところに、", "いちばん時間をかける。"]}
          className="font-heading text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.7] tracking-[0.12em]"
        />

        <div className="mt-20 grid gap-14 md:grid-cols-2 md:gap-10">
          {notes.map((n, i) => (
            <div key={n.title}>
              <RevealImage
                src={n.src}
                alt={n.alt}
                sizes="(max-width: 768px) 100vw, 45vw"
                className="aspect-[4/3] w-full"
                delay={i * 140}
              />
              <h3
                data-reveal
                style={{ ["--d" as string]: `${i * 140 + 140}ms` }}
                className="mt-8 font-heading text-xl tracking-[0.2em]"
              >
                {n.title}
              </h3>
              <p
                data-reveal
                style={{ ["--d" as string]: `${i * 140 + 220}ms` }}
                className="mt-4 max-w-md text-sm leading-[2.4] text-kinari/65"
              >
                {n.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
