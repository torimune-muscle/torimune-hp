# 鶏むねマッスル 公式HP

Astro + Tailwind CSS で作ったプロフィールサイト。GitHub Pages で公開する。

## 中身の編集

**`src/data/site.ts` だけ編集すればOK。** `TODO` の箇所を差し替える。

| 差し替えるもの | 場所 |
|---|---|
| 各SNS・楽天ROOM・公式LINEのURLとID | `links` |
| 問い合わせフォームの送信先 | `contact.formAccessKey`（下の「問い合わせフォーム」参照） |
| 自己紹介文・数字 | `aboutBody` / `stats` |
| 発信テーマ | `contents` |

## 画像

| ファイル | 内容 |
|---|---|
| `src/assets/icon.jpeg` | アイコン（正方形・512px以上推奨。png/jpg/webpも可、名前は `icon.○○`）。置くだけで全体に反映し、WebPに自動で軽量化される。小さい表示では顔のあたりを拡大（位置は `src/components/Avatar.astro` の `faceStyle`） |
| `public/ogp.png` | LINEやXでURLを貼った時のプレビュー画像（1200×630） |
| `public/favicon.png` / `apple-touch-icon.png` | ブラウザのタブ／スマホのホーム画面のアイコン（アイコンの顔を切り抜いたもの） |

## 問い合わせフォーム

フォームの内容は [Web3Forms](https://web3forms.com)（無料・月250件まで）経由でメールに届く。ページにメールアドレスは表示されない。

1. https://web3forms.com を開き、受け取りたいメールアドレスを入力して「Create Access Key」
2. 届いたメールに書かれているアクセスキー（英数字とハイフン）を `src/data/site.ts` の `formAccessKey` に貼る
3. キーが空の間は、送信すると「準備中です。公式LINEからご連絡ください」と表示される

## 手元で確認

```
npm install      # 初回だけ
npm run dev      # http://localhost:4321 で確認
npm run build    # 本番用ビルド（dist/ に出力）
```

## 公開（GitHub Pages）

1. GitHubで新しいリポジトリを作る（例：`torimune-hp`）
2. このフォルダを push する（`node_modules` と `dist` は除外済み）
3. リポジトリの Settings → Pages → Source を **GitHub Actions** にする
4. 以後 main に push するたびに自動で公開される  
   URL：`https://<ユーザー名>.github.io/torimune-hp/`

リポジトリ名を `<ユーザー名>.github.io` にするとURLが `https://<ユーザー名>.github.io/` になる。
URLのパスは自動で設定されるので、どちらでも設定変更は不要。
