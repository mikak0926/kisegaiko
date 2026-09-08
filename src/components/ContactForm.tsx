"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "sent";

const serviceOptions = [
  "門まわり・アプローチ",
  "カーポート・パーゴラ",
  "植栽・シンボルツリー",
  "土間・塀・フェンス",
  "外構全体のリニューアル",
  "その他・未定",
];

// TODO: 送信先バックエンド未接続。メール送信 or 外部フォームサービス連携が
// 確定次第、この関数を実装する(Vercel なら Route Handler + Resend 等)。
async function submitContact(data: Record<string, string>): Promise<void> {
  console.log("[ContactForm] 送信先未接続のため送信されていません", data);
  await new Promise((resolve) => setTimeout(resolve, 700));
}

const field =
  "mt-3 w-full border-b border-[color:var(--line-light)] bg-transparent px-1 py-3 text-sm text-kinari outline-none transition-colors duration-500 placeholder:text-kinari/25 focus:border-shinchu";
const label = "block text-[0.78rem] sm:text-[0.7rem] tracking-[0.28em] text-kinari/50";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;

    await submitContact(data);
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="border border-[color:var(--line-light)] px-8 py-20 text-center">
        <p className="font-heading text-lg tracking-[0.2em] text-kinari">
          お問い合わせありがとうございます
        </p>
        <p className="mt-5 text-xs leading-[2.2] text-kinari/55">
          内容を確認のうえ、担当者よりご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div className="grid gap-10 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            お名前 <span className="text-shinchu">*</span>
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={field} />
        </div>

        <div>
          <label htmlFor="email" className={label}>
            メールアドレス <span className="text-shinchu">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} />
        </div>
      </div>

      <div>
        <label htmlFor="service" className={label}>
          ご相談内容
        </label>
        <select id="service" name="service" defaultValue="" className={`${field} [&>option]:text-sumi`}>
          <option value="" disabled>
            選択してください
          </option>
          {serviceOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={label}>
          ご要望・現在のお困りごと
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`${field} resize-none`}
          placeholder="敷地の広さ、ご希望のイメージ、お引越し予定など"
        />
      </div>

      <div className="flex flex-wrap items-center gap-8 pt-2">
        <button type="submit" disabled={status === "submitting"} className="btn-line text-kinari disabled:opacity-40">
          <span>{status === "submitting" ? "送信中..." : "送信する"}</span>
          <span aria-hidden>→</span>
        </button>
        <p className="text-[0.78rem] sm:text-[0.7rem] leading-[2] text-kinari/40">
          ご相談・現地調査・お見積りは無料です。
        </p>
      </div>
    </form>
  );
}
