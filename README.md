# かんたんSNS（Next.js + React + TypeScript）

学習用・ポートフォリオ用に作成した、**1画面完結の簡易SNSアプリ**です。  
Reactの `state`、フォーム処理、配列更新（`map` / `filter`）の基本を学べる構成になっています。

---

## 🎯 このアプリで学べること

- `useState` を使った画面内データ管理
- フォーム入力（`textarea`）の扱い方
- 投稿データの追加・削除・更新（いいね）
- シンプルなUI設計（白ベース、余白多め）

---

## ✨ 実装機能

- テキスト投稿
- 投稿一覧表示
- 投稿削除
- いいね機能
- いいね数表示

> ※ ログイン機能 / ユーザー管理 / DB / API連携は未実装（学習の最初の段階に集中するため）

---

## 🧱 ファイル構成

```text
app-sns/
├─ app/
│  ├─ globals.css      # 全体スタイル
│  ├─ layout.tsx       # ルートレイアウト
│  └─ page.tsx         # 1画面SNS本体（UI + ロジック）
├─ next-env.d.ts       # Next.js TypeScript補助
├─ next.config.ts      # Next.js設定
├─ package.json        # 依存パッケージとスクリプト
├─ tsconfig.json       # TypeScript設定
└─ README.md           # このファイル
```

---

## 🚀 セットアップ

### 1. 依存関係をインストール

```bash
npm install
```

### 2. 開発サーバーを起動

```bash
npm run dev
```

### 3. ブラウザで確認

`http://localhost:3000` を開く。

---

## 🧪 利用可能なスクリプト

```bash
npm run dev        # 開発サーバー起動
npm run build      # 本番ビルド
npm run start      # 本番サーバー起動
npm run typecheck  # TypeScriptの型チェック
```

---

## 📘 初心者向けコードの見どころ

### 1) state（状態）管理

- `inputText`: 入力欄の文字列
- `posts`: 投稿一覧（配列）

```ts
const [inputText, setInputText] = useState('');
const [posts, setPosts] = useState<Post[]>([]);
```

### 2) フォーム送信

`onSubmit` で投稿追加処理を行います。  
`preventDefault()` でページ再読み込みを防ぎます。

### 3) 配列更新

- **追加**: `[newPost, ...prevPosts]`
- **削除**: `filter`
- **いいね更新**: `map`

Reactでは「元配列を直接変更せず、新しい配列を作る」のが重要です。

---

## 🔜 今後の拡張アイデア

- 投稿日時の表示
- 入力文字数カウンター
- 並び替え（新着/人気）
- ローカルストレージ保存
- API + DB連携（次の学習ステップ）

---

## 📄 ライセンス

学習・ポートフォリオ目的で自由に利用・改変してください。
