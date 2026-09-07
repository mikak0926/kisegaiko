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
    title: "光を透かす門袖",
    place: "〇〇市 K邸",
    year: "2026",
    tags: ["門まわり", "琉球ブロック", "植栽"],
    image: "/images/works-01.jpg",
    body: "左官の門袖に開口を空け、琉球ブロックをはめ込みました。壁として閉じきらないことで圧迫感が消え、日が回ると開口の影が足元の砂利に落ちます。ポストとインターホンは同じ壁面に納めました。",
  },
  {
    id: "carport",
    no: "02",
    title: "柱を、端に寄せる",
    place: "〇〇市 M邸",
    year: "2026",
    tags: ["カーポート", "土間", "造作"],
    image: "/images/works-02.jpg",
    body: "柱を駐車スペースの外側だけに立て、内側に柱が来ないよう梁を飛ばしました。車の出し入れが妨げられず、土間もひと続きで納まります。天井は木目のケイカル板です。",
  },
  {
    id: "approach",
    no: "03",
    title: "石と苔のアプローチ",
    place: "〇〇市 S邸",
    year: "2026",
    tags: ["アプローチ", "植栽", "石工事"],
    image: "/images/works-03.jpg",
    body: "既存の高木はそのまま残し、木漏れ日の落ちる位置に飛石を据えました。使った素材は敷石と砂利と下草だけです。歩く速さが落ちる間隔で石を置いています。",
  },
  {
    id: "garden",
    no: "04",
    title: "敷地全体をまとめて",
    place: "〇〇市 T邸",
    year: "2026",
    tags: ["全体外構", "塀・フェンス", "照明"],
    image: "/images/works-04.jpg",
    body: "門まわりから駐車場、庭までを一度に工事しました。壁・土間・植栽の面積の配分を先に決めてから、個々の仕様を詰めています。照明は必要な場所だけに絞りました。",
  },
];
