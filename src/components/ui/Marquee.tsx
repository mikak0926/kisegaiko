/** 無限に流れるキーワード帯。 */
export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div
      aria-hidden
      className="overflow-hidden border-y border-[color:var(--line)] py-6"
    >
      <div className="marquee-track">
        {row.map((t, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-10 whitespace-nowrap px-10 font-heading text-2xl tracking-[0.3em] text-sumi/45 sm:text-3xl"
          >
            {t}
            <span className="inline-block h-1 w-1 rounded-full bg-shinchu" />
          </span>
        ))}
      </div>
    </div>
  );
}
