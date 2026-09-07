import Image from "next/image";
import ContactForm from "./ContactForm";
import RevealText from "./ui/RevealText";
import SectionLabel from "./ui/SectionLabel";
import { site } from "@/lib/site";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-sumi py-[var(--section-y)] text-kinari"
    >
      <Image
        src="/images/works-03.jpg"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover opacity-20"
      />
      <div aria-hidden className="absolute inset-0 bg-sumi/70" />

      <SectionLabel no="07" en="CONTACT" ja="相談" tone="light" />

      <div className="relative mx-auto max-w-[1400px] px-[var(--gutter)]">
        <p data-reveal className="mb-8 font-en text-[0.7rem] tracking-[0.45em] text-shinchu">
          07 — CONTACT
        </p>

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <RevealText
              lines={["まずは、", "敷地を見せてください。"]}
              className="font-heading text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.7] tracking-[0.12em]"
            />
            <p
              data-reveal
              style={{ ["--d" as string]: "200ms" }}
              className="mt-10 max-w-md text-sm leading-[2.6] text-kinari/70"
            >
              ご相談・現地調査・お見積りまで無料で承ります。「何から決めればいいか分からない」という段階でも構いません。図面や写真がお手元にあれば、あわせてお知らせください。
            </p>

            <dl
              data-reveal
              style={{ ["--d" as string]: "300ms" }}
              className="mt-14 space-y-5 border-t border-[color:var(--line-light)] pt-8 text-xs leading-[2.2] text-kinari/60"
            >
              <div>
                <dt className="tracking-[0.24em] text-kinari/40">所在地</dt>
                <dd className="mt-1">{site.address}</dd>
              </div>
              <div>
                <dt className="tracking-[0.24em] text-kinari/40">営業時間</dt>
                <dd className="mt-1">{site.hours}</dd>
              </div>
              <div>
                <dt className="tracking-[0.24em] text-kinari/40">対応エリア</dt>
                <dd className="mt-1">{site.areas}</dd>
              </div>
            </dl>
          </div>

          <div data-reveal style={{ ["--d" as string]: "160ms" }} className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
