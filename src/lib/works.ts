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
    body: "門柱一本と、足元の植栽だけ。要素を絞った分、白い左官壁の面と、そこに落ちるモミジの影が際立ちます。駐車スペースとの取り合いは段差を作らず、一枚の土間で納めました。",
  },
  {
    id: "carport",
    no: "02",
    title: "既製品を、設計する",
    place: "〇〇市 M邸",
    year: "2026",
    tags: ["カーポート", "土間", "フェンス"],
    image: "/images/works-02.jpg",
    body: "既製のアルミカーポートでも、柱の位置と土間の目地の割付で見え方は変わります。前面道路からの見付けを揃え、目地を建物の通り芯に合わせることで、既製品らしさを抑えました。",
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
