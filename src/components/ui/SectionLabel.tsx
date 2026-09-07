/** 画面左に縦書きで貼り付く章ラベル。 */
export default function SectionLabel({
  no,
  en,
  ja,
  tone = "dark",
}: {
  no: string;
  en: string;
  ja: string;
  tone?: "dark" | "light";
}) {
  const color = tone === "light" ? "text-kinari/70" : "text-sumi/50";
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute left-[max(1.5rem,3vw)] top-0 hidden h-full lg:block`}
    >
      <div className={`sticky top-1/3 flex flex-col items-center gap-4 ${color}`}>
        <span className="font-en text-sm tracking-[0.3em]">{no}</span>
        <span className="h-16 w-px bg-current opacity-40" />
        <span className="vertical font-en text-xs tracking-[0.5em]">{en}</span>
        <span className="vertical font-heading text-xs tracking-[0.4em]">{ja}</span>
      </div>
    </div>
  );
}
