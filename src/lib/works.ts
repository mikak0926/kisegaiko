export type Work = {
  id: string;
  no: string;
  title: string;
  place: string;
  year: string;
  tags: string[];
  image: string;
  body: string;
};

export const works: Work[] = [
  {
    id: "gate",
    no: "01",
    title: "静けさを迎える門",
    place: "〇〇市 K邸",
    year: "2026",
    tags: ["門まわり", "植栽", "アプローチ"],
    image: "/images/works-01.jpg",
    body: "道路から玄関までの十数歩を、単なる通路ではなく一つの「間」として設計しました。杉板の縦格子が視線をやわらかく遮り、歩を進めるごとに景色が開いていきます。",
  },
  {
    id: "carport",
    no: "02",
    title: "屋根がつくる余白",
    place: "〇〇市 M邸",
    year: "2026",
    tags: ["カーポート", "パーゴラ", "土間"],
    image: "/images/works-02.jpg",
    body: "駐車場を「置き場」で終わらせないために、木天井の片流れ屋根を架けました。日中は格子の影が土間に落ち、時間とともに表情が移ろいます。",
  },
  {
    id: "approach",
    no: "03",
    title: "石と苔のアプローチ",
    place: "〇〇市 S邸",
    year: "2026",
    tags: ["アプローチ", "植栽", "石工事"],
    image: "/images/works-03.jpg",
    body: "既存の高木を活かし、木漏れ日の落ちる位置に飛石を据えました。素材は少なく、配置は丁寧に。引き算でつくる庭です。",
  },
  {
    id: "garden",
    no: "04",
    title: "住まいを囲む一枚の景",
    place: "〇〇市 T邸",
    year: "2026",
    tags: ["全体外構", "塀・フェンス", "照明"],
    image: "/images/works-04.jpg",
    body: "敷地全体を一枚の絵として捉え、壁・土間・植栽の面積比から設計しました。夜は最小限の照明だけを残し、陰翳を楽しめるように。",
  },
];
