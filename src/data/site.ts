// =========================================================
//  HPの中身はこのファイルだけ編集すればOK
//  「TODO」と書いてある所を本物の情報に差し替えてください
// =========================================================

export const profile = {
  name: '鶏むねマッスル',
  nameEn: 'TORIMUNE MUSCLE',
  // アイコン画像は src/assets/icon.jpeg（png/webpも可）に置くと自動で使われます
  catch: '妻の「痩せたい」を支えるコーチ',
  description:
    '鶏むね肉を中心にした、我慢しない「食べ痩せ」レシピと考え方を発信しています。厳しい運動や根性に頼らず、毎日のごはんを整えて痩せる方法をお届けします。',
};

/** ヒーローの大見出し。style: 'mark' は黄色マーカー、'fade' は薄い文字 */
export const heroLines: { text: string; style?: 'mark' | 'fade' }[][] = [
  [{ text: 'がまん', style: 'fade' }, { text: 'で痩せる' }],
  [{ text: 'じゃなく' }],
  [{ text: '食べて', style: 'mark' }, { text: '痩せる' }],
];
export const heroEn = 'Eat well, get lean.';

/** ABOUT の数字（必要に応じて更新） */
export const stats = [
  { value: '72→64', unit: 'kg', label: '体重の変化' },
  { value: '-8', unit: 'kg', label: '4ヶ月で' },
  { value: '10.4', unit: '万人', label: 'フォロワー' },
];

/** ABOUT の見出し（＼ ／ で囲んで表示。配列の1要素＝1行） */
export const aboutLead = ['食べるのが好き。', 'でも痩せたい女性へ'];
/** ABOUT の箇条書き。link: true の行には公式LINEへのボタンが付きます */
export const aboutPoints: { text: string; link?: boolean }[] = [
  { text: '体型を理由に「着たい服」を諦めない' },
  { text: '好きなものを楽しめる食事管理を発信' },
  { text: 'ダイエット攻略ツールを公式LINEで無料配布中！', link: true },
];
/** プロフィール欄の補足 */
export const aboutNote = '夫婦2人暮らし👫';

export type PlatformKey =
  | 'instagram'
  | 'tiktok'
  | 'youtube'
  | 'lemon8'
  | 'rakutenroom'
  | 'line'
  | 'mail';

/** 発信しているテーマ（CONTENTS）。platforms はそのテーマを主に出している場所 */
export const contents: {
  en: string;
  title: string;
  body: string;
  tags: string[];
  platforms: PlatformKey[];
}[] = [
  {
    en: 'RECIPE',
    title: '鶏むねレシピ',
    body: 'レンジで6分の鶏ハムなど、高たんぱく・低脂質でちゃんとおいしい作り置きレシピ。',
    tags: ['レンジ調理', '作り置き', '高たんぱく'],
    platforms: ['instagram', 'tiktok', 'youtube', 'lemon8'],
  },
  {
    en: 'METHOD',
    title: '食べ痩せの考え方',
    body: '我慢しないで続く食事の整え方。PFCバランスや停滞期の乗り越え方をわかりやすく。',
    tags: ['PFCバランス', '習慣化', 'リバウンド対策'],
    platforms: ['instagram', 'line'],
  },
  {
    en: 'CONVENIENCE',
    title: 'コンビニ・外食の選び方',
    body: '忙しい日でも大丈夫。コンビニや外食チェーンで選ぶべき「痩せメニュー」を紹介。',
    tags: ['コンビニ', '外食', '時短'],
    platforms: ['instagram', 'line'],
  },
  {
    en: 'ITEMS',
    title: '愛用アイテム',
    body: 'キッチングッズやストック食材など、実際に使って良かったものをまとめています。',
    tags: ['キッチン', '食材', 'ストック'],
    platforms: ['rakutenroom'],
  },
];

/** LINKS。url を本物に差し替えてください。featured: true は大きく目立たせます */
export const links: {
  key: PlatformKey;
  label: string;
  handle: string;
  url: string;
  note?: string;
  featured?: boolean;
}[] = [
  {
    key: 'line',
    label: '公式LINE',
    handle: '登録で特典プレゼント中・個別相談も受付中',
    url: 'https://lin.ee/ZwhgBQ5',
    note: '最新情報・限定コンテンツのお届けと、ダイエットの個別相談の窓口です',
    featured: true,
  },
  {
    key: 'instagram',
    label: 'Instagram',
    handle: '@torimune_muscle14',
    url: 'https://www.instagram.com/torimune_muscle14/',
  },
  {
    key: 'tiktok',
    label: 'TikTok',
    handle: '@torimune_muscle14',
    url: 'https://www.tiktok.com/@torimune_muscle14',
  },
  {
    key: 'youtube',
    label: 'YouTube',
    handle: '@torimune_muscle14',
    url: 'https://www.youtube.com/@torimune_muscle14',
  },
  {
    key: 'lemon8',
    label: 'Lemon8',
    handle: '@torimune_muscle14',
    url: 'https://s.lemon8-app.com/s/GgmZhhhdkh',
  },
  {
    key: 'rakutenroom',
    label: '楽天ROOM',
    handle: '愛用品まとめ',
    url: 'https://room.rakuten.co.jp/room_torimune_muscle/items',
  },
  {
    key: 'mail',
    label: 'お問い合わせ',
    handle: 'お仕事のご依頼はフォームから',
    url: '#contact',
  },
];

export const contact = {
  lead: 'お仕事のご依頼・個別相談はこちら',
  body: 'PR案件・レシピ監修・取材などのお仕事はフォームから、ダイエットの個別相談は公式LINEから受け付けています。',
  /**
   * 問い合わせフォームの送信先（Web3Forms のアクセスキー）
   * https://web3forms.com でメールアドレスを入力すると届くキーを貼る。
   * フォームの内容はそのメールアドレスに届く（ページにアドレスは表示されない）
   */
  formAccessKey: '920af5c0-5313-4cbc-9bf9-29e97ae7ffcb',
  /** 個別相談（公式LINE）で相談できること */
  consultTopics: ['食事の整え方・何を食べればいいか', '停滞期・リバウンドが不安', '忙しくても続けるコツ', '家族のごはんとの両立'],
  /** ご用件の選択肢 */
  topics: ['PR案件・タイアップ', 'レシピ監修・開発', '取材・メディア出演', 'コラボのご相談', 'その他'],
};
