---
name: g1ft3d-design
description: G1FT3D CTFチームサイトのデザイン設計書。カラーパレット、タイポグラフィ、エフェクト方針、ページ構成、コンポーネント構成、技術スタックを参照するために使う。G1FT3Dチームサイトの実装・修正・デザイン確認を行う際は必ずこのスキルを参照すること。
---

# G1FT3D チームサイト デザイン設計書

## ロゴ・ブランドイメージ

- 黒に近いダークグリーン背景にネオングリーンのアイコン
- 錠前＋シールド＋「G」の組み合わせロゴ
- ターミナルカーソル（`>_`）をモチーフに含む
- グリッチ・スキャンライン効果でサイバー感を演出

---

## カラーパレット

| 変数名 | カラーコード | 用途 |
|---|---|---|
| Base（背景） | `#0d1a14` | ページ全体の背景（黒に近い深いダークグリーン） |
| Surface（背景） | `#121f17` | カード・モーダル等の背景 |
| Primary（アクセント） | `#2edf96` | ロゴのネオングリーン・メインアクセント |
| Glow（グロー） | `#2edf9640` | グロー効果用（透明度40%） |
| Text Primary | `#e8fff5` | メインテキスト（緑みがかった白） |
| Text Muted | `#4a7a61` | 補助テキスト・キャプション |
| Border | `#1e3d2c` | ボーダー・区切り線 |
| Danger | `#ff4566` | エラー・警告用レッド（使用頻度低） |

### Tailwind CSS カスタムカラー設定例

```js
// tailwind.config.ts
colors: {
  base: '#0d1a14',
  surface: '#121f17',
  primary: '#2edf96',
  glow: '#2edf9640',
  border: '#1e3d2c',
  danger: '#ff4566',
  'text-primary': '#e8fff5',
  'text-muted': '#4a7a61',
}
```

---

## タイポグラフィ

| 用途 | フォント | Google Fonts URL |
|---|---|---|
| 見出し・ロゴテキスト | **Space Mono** | `family=Space+Mono:wght@400;700` |
| 本文 | **Inter** | `family=Inter:wght@400;500;600` |
| コードブロック・端末表示 | **JetBrains Mono** | `family=JetBrains+Mono:wght@400;700` |

---

## エフェクト・演出方針

| エフェクト | 使用箇所 | ライブラリ |
|---|---|---|
| グリッチアニメーション | ヘッダーのチーム名「G1FT3D」 | Magic UI / CSS |
| ターミナルタイプライター | Heroセクションのキャッチコピー | Aceternity UI `TextGenerateEffect` |
| スキャンライン背景 | 全体の薄いオーバーレイ（opacity低め） | CSS `::before` |
| ネオングロー | ボタン・ボーダーのホバー時 | Tailwind `shadow` + CSS |
| パーティクル/グリッド背景 | Heroセクション背景 | Aceternity UI `Spotlight` |
| 数字カウントアップ | Statsセクション | Magic UI `NumberTicker` |
| ボーダーアニメーション | カード類 | Magic UI `AnimatedBorderCard` |

---

## ページ構成

### 共通

- **ナビゲーション**: Home / About / Members / Contact
- コンポーネント: shadcn/ui `NavigationMenu`
- スクロール時に背景が半透明になる sticky header

---

### Home

| セクション | 内容 | コンポーネント |
|---|---|---|
| Hero | チーム名 + タイプライターキャッチコピー + 参加CTF実績バッジ | Aceternity `Spotlight` + `TextGenerateEffect` |
| Stats | 参加大会数・解いた問題数・最高順位（数字カード） | Magic UI `NumberTicker` |
| Recent | 直近CTF参加履歴（テーブルまたはカードリスト） | shadcn/ui `Card` + `Badge` |

---

### About

| セクション | 内容 |
|---|---|
| Team Intro | チームの紹介文・ミッション |
| Categories | 得意ジャンル（Web / Pwn / Crypto / Rev / Misc）アイコン付き |
| History | チーム設立経緯・活動履歴（タイムライン形式） |

---

### Members

| セクション | 内容 | コンポーネント |
|---|---|---|
| カードグリッド | 各メンバーのアバター・ハンドル・得意分野 | Aceternity `CardSpotlight` |
| 役割タグ | Leader / Web / Crypto / Pwn 等 | shadcn/ui `Badge` |

> メンバー情報はプレースホルダーで実装し、後から差し替え可能な形にする

---

### Contact

| セクション | 内容 |
|---|---|
| SNS/外部リンク | CTFtime / X(Twitter) / Discord 等のアイコンリンク |
| お問い合わせフォーム | 名前・メール・メッセージ（表示のみ、送信機能は任意） |

---

## コンポーネント構成

### Aceternity UI
- `Spotlight` → Heroセクション背景
- `TextGenerateEffect` → タイプライター演出
- `CardSpotlight` → メンバーカード

### Magic UI
- `NumberTicker` → Statsの数字カウントアップ
- `AnimatedBorderCard` → カード系コンポーネント
- グリッチ系テキストエフェクト → チーム名

### shadcn/ui
- `NavigationMenu` → グローバルナビ
- `Button` → CTA・各種ボタン
- `Badge` → ジャンルタグ・役割タグ
- `Card` → コンテンツカード全般
- `Input` / `Textarea` → お問い合わせフォーム

---

## 技術スタック

| カテゴリ | 採用技術 |
|---|---|
| フレームワーク | Next.js (App Router) |
| スタイリング | Tailwind CSS |
| UIベース | shadcn/ui |
| アニメーションUI | Aceternity UI + Magic UI |
| アニメーション基盤 | Framer Motion（3ライブラリ共通） |
| フォント | Google Fonts（Space Mono / Inter / JetBrains Mono） |
| 言語 | TypeScript |

---

## 実装上の注意

- プレースホルダーデータ（メンバー・CTF実績・SNSリンク等）は後から差し替えやすいよう定数ファイル（`src/data/`）にまとめる
- ダークテーマのみ対応（ライトモード不要）
- アニメーションは`prefers-reduced-motion`を考慮し、設定により無効化できるようにする
