# 喜瀬外構 — コーポレートサイト

高級外構・エクステリア工事会社「喜瀬外構」のブランドサイト。
Next.js 16 (App Router) + React 19 + Tailwind CSS v4。

## 開発

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## 構成

| パス | 役割 |
|---|---|
| `src/lib/site.ts` | 会社名・住所・営業時間などの一括管理。**差し替えはここ** |
| `src/lib/works.ts` | 施工事例データ |
| `src/styles/tokens.css` | デザイントークン(墨・生成り・真鍮) |
| `src/app/globals.css` | リビール/マーキー/ケンバーンズ等の演出 CSS |
| `src/components/RevealEngine.tsx` | 全リビールを司る単一の IntersectionObserver |
| `src/components/SmoothScroll.tsx` | Lenis による慣性スクロール |
| `src/components/useRaf.ts` 系 | スクロール連動処理を単一 rAF に集約 |

## アニメーション

ヒーロー動画(固定カメラ・葉の揺れ・雲と影の移ろい／8秒シームレスループ)／
ローディングの幕開け／ケンバーンズ(動画非表示時のみ)／行マスクのせり上がり／画像のクリップリビール(内側は逆スケール)／
パララックス／縦書きスティッキーラベル／WORKS のピン留め横スクロール／マーキー／
カウントアップ／スクロールプログレス／カスタムカーソル／全画面メニュー。

`prefers-reduced-motion: reduce` ですべて無効化され、最終状態で固定表示される。

## 未接続の TODO

- `src/components/ContactForm.tsx` — 送信先バックエンド未接続(Route Handler + メール送信サービスを想定)
- `src/lib/site.ts` — 住所・営業時間・メールアドレスが仮値
- `src/lib/works.ts` — 施工事例のテキストと画像が仮
- 画像・動画はすべて生成素材。実写が用意でき次第 `public/images/` `public/videos/` を差し替える

## ヒーロー動画

`public/videos/hero.webm` (VP9 / 1600px / 832KB) と `hero.mp4` (H.264 / 1920px / 2.0MB) の2形式。
8秒・音声なし・シームレスループ。開始フレームと終了フレームに同じ静止画を指定して生成しているため、
繋ぎ目が出ない。

`HeroMedia.tsx` が読み込み条件を判定する。以下のいずれかに当てはまる場合は動画を読み込まず、
静止画(ケンバーンズ付き)のまま表示する。

- ビューポート幅 768px 未満
- `prefers-reduced-motion: reduce`
- `navigator.connection.saveData` または 2G 回線

動画は静止画の上にフェードインで重なるため、読み込み中や再生失敗時も破綻しない。
