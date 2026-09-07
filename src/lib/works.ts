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
    body: "門袖に琉球ブロックを積みました。抜けのある壁は視線をやわらげ、日が回ると開口の影が壁と土間に落ちます。奥の壁を濃いグレーで納め、ブロックの生成りが浮き上がるようにしました。",
  },
  {
    id: "carport",
    no: "02",
    title: "柱を、端に寄せる",
    place: "〇〇市 M邸",
    year: "2026",
    tags: ["カーポート", "土間", "造作"],
    image: "/images/works-02.jpg",
    body: "柱を片側一列に寄せ、屋根を駐車スペース側へ跳ね出しました。車の出し入れを妨げる柱が内側に立たず、土間もひと続きで納まります。天井は木目のケイカル板で仕上げました。",
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
