import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-sumi px-[var(--gutter)] pb-12 text-kinari">
      <div className="mx-auto max-w-[1400px] border-t border-[color:var(--line-light)] pt-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-heading text-xl tracking-[0.4em]">{site.name}</p>
            <p className="mt-3 font-en text-[0.65rem] tracking-[0.4em] text-kinari/45">
              {site.nameEn} — EXTERIOR WORKS
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-xs tracking-[0.24em] text-kinari/60 transition-colors duration-500 hover:text-shinchu"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="mt-14 font-en text-[0.6rem] tracking-[0.3em] text-kinari/30">
          © {site.founded} {site.nameEn}. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
