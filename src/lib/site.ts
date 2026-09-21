/**
 * サイト全体で使う会社情報・文言。差し替えはここ 1 箇所で完結させる。
 */
export const site = {
  name: "喜瀬外構",
  nameEn: "KISE GAIKO",
  tagline: "一枚の塀から、一邸の外構まで。",
  descriptionShort:
    "門まわりから駐車場、塀、植栽まで。外構・エクステリア工事を職人が直接施工します。",
  founded: 2026,
  // TODO: 確定次第差し替え(電話番号は非表示の方針のため設けない)
  address: "神奈川県横浜市",
  hours: "9:00〜18:00(定休日:日曜)",
  email: "info@example.com",
  areas: "神奈川県全域・東京都",
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
