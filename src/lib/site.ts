/**
 * サイト全体で使う会社情報・文言。差し替えはここ 1 箇所で完結させる。
 */
export const site = {
  name: "喜瀬外構",
  nameEn: "KISE GAIKO",
  tagline: "家のまわりを、一邸ずつ設計する。",
  descriptionShort:
    "設計から施工まで一貫して手がける、一邸ごとの外構・エクステリア。",
  founded: 2026,
  // TODO: 確定次第差し替え(電話番号は非表示の方針のため設けない)
  address: "〇〇県〇〇市〇〇 0-0-0",
  hours: "9:00〜18:00(定休日:水曜)",
  email: "info@example.com",
  areas: "〇〇県全域および近隣地域",
} as const;

export const nav = [
  { id: "concept", label: "意匠", en: "CONCEPT" },
  { id: "works", label: "施工事例", en: "WORKS" },
  { id: "material", label: "素材", en: "MATERIAL" },
  { id: "service", label: "業務内容", en: "SERVICE" },
  { id: "flow", label: "ご依頼の流れ", en: "FLOW" },
  { id: "company", label: "会社概要", en: "COMPANY" },
  { id: "contact", label: "お問い合わせ", en: "CONTACT" },
] as const;
