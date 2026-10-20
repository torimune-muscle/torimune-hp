import { siInstagram, siTiktok, siYoutube, siLine, siRakuten } from 'simple-icons';
import { svgPathBbox } from 'svg-path-bbox';
import type { PlatformKey } from './site';

// アイコンはすべて 24x24 の viewBox で描画する
// Lemon8 と メール は simple-icons に無いので自作パス
const lemon8Path =
  'M12 6.2c-4.6 0-8.4 3.2-8.4 7.4S7.4 21 12 21s8.4-3.2 8.4-7.4c0-1.3-.4-2.6-1-3.6l1.2-1.6-2-.4C17 6.9 14.6 6.2 12 6.2Zm0 3.3c1.5 0 2.6 1 2.6 2.1 0 .6-.3 1.1-.7 1.5.7.4 1.1 1.1 1.1 1.9 0 1.4-1.3 2.5-3 2.5s-3-1.1-3-2.5c0-.8.4-1.5 1.1-1.9-.4-.4-.7-.9-.7-1.5 0-1.2 1.1-2.1 2.6-2.1Zm0 1.3c-.6 0-1 .4-1 .9s.4.9 1 .9 1-.4 1-.9-.4-.9-1-.9Zm0 3.2c-.8 0-1.3.5-1.3 1.1s.5 1.1 1.3 1.1 1.3-.5 1.3-1.1-.5-1.1-1.3-1.1ZM13.4 5.6C13.6 3.4 15.2 2 17.6 2c.1 2.3-1.6 3.8-4.2 3.6Z';
const mailPath =
  'M3 5.5h18a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1Zm1.4 2 7.6 5.6 7.6-5.6H4.4ZM20 9.2l-7.4 5.5a1 1 0 0 1-1.2 0L4 9.2v7.3h16V9.2Z';

type Def = { name: string; path: string; color: string; fillRule?: 'evenodd'; nudge?: [number, number] };

const defs: Record<PlatformKey, Def> = {
  instagram: { name: 'Instagram', path: siInstagram.path, color: '#E1306C' },
  tiktok: { name: 'TikTok', path: siTiktok.path, color: '#111111' },
  youtube: { name: 'YouTube', path: siYoutube.path, color: `#${siYoutube.hex}` },
  lemon8: { name: 'Lemon8', path: lemon8Path, color: '#E0A100', fillRule: 'evenodd' },
  // R の重心が左に寄っている（下の帯が全幅のため）ので右へ補正
  rakutenroom: { name: '楽天ROOM', path: siRakuten.path, color: `#${siRakuten.hex}`, nudge: [-1.6, 0] },
  line: { name: '公式LINE', path: siLine.path, color: '#06C755' },
  mail: { name: 'メール', path: mailPath, color: '#2E2A24' },
};

/** 実際の形の外枠から正方形の viewBox を作り、どのアイコンも枠の中央に来るようにする */
function centeredViewBox(d: Def) {
  const [x0, y0, x1, y1] = svgPathBbox(d.path);
  const size = Math.max(x1 - x0, y1 - y0);
  const [nx, ny] = d.nudge ?? [0, 0];
  const cx = (x0 + x1) / 2 + nx;
  const cy = (y0 + y1) / 2 + ny;
  return [cx - size / 2, cy - size / 2, size, size].map((n) => n.toFixed(2)).join(' ');
}

export const platforms = Object.fromEntries(
  Object.entries(defs).map(([k, d]) => [k, { ...d, viewBox: centeredViewBox(d) }]),
) as Record<PlatformKey, Def & { viewBox: string }>;
