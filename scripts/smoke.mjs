import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, isAbsolute, relative, resolve } from 'node:path';

const DIST = resolve(new URL('../dist/', import.meta.url).pathname);
// Marketing routes exist once per locale (src/pages/ vs src/pages/<locale>/).
const LOCALE_PREFIXES = ['', '/fr', '/de', '/es', '/fa', '/ja', '/zh-cn'];
const MARKETING_ROUTES = [
  '/',
  '/products/',
  '/products/item-a765/',
  '/services/',
  '/blog/',
  '/blog/post-1/',
  '/insights/insight-1/',
  '/contact/',
];
const ROUTES = [
  ...LOCALE_PREFIXES.flatMap(prefix =>
    MARKETING_ROUTES.map(route => `${prefix}${route}`)
  ),
  '/404',
  '/fr/404/',
  '/de/404/',
  '/es/404/',
  '/fa/404/',
  '/ja/404/',
  '/zh-cn/404/',
];

// Cheap content assertions on top of the status check.
const EXPECTATIONS = {
  '/fr/': [
    '<html lang="fr"',
    '<meta property="og:locale" content="fr_FR"',
    'hreflang="en" href="https://screwfast.uk"',
  ],
  '/zh-cn/': [
    '<html lang="zh-CN"',
    '<meta property="og:locale" content="zh_CN"',
    'hreflang="en" href="https://screwfast.uk"',
  ],
  '/ja/': [
    '<html lang="ja"',
    '<meta property="og:locale" content="ja_JP"',
    'hreflang="en" href="https://screwfast.uk"',
  ],
  '/fa/': [
    '<html lang="fa" dir="rtl"',
    '<meta property="og:locale" content="fa_IR"',
    'hreflang="en" href="https://screwfast.uk"',
  ],
  '/es/': [
    '<html lang="es"',
    '<meta property="og:locale" content="es_ES"',
    'hreflang="en" href="https://screwfast.uk"',
  ],
  '/de/': [
    '<html lang="de"',
    '<meta property="og:locale" content="de_DE"',
    'hreflang="en" href="https://screwfast.uk"',
  ],
  '/': [
    '<html lang="en"',
    'hreflang="fr" href="https://screwfast.uk/fr"',
    'hreflang="de" href="https://screwfast.uk/de"',
    'hreflang="es" href="https://screwfast.uk/es"',
    'hreflang="fa" href="https://screwfast.uk/fa"',
    'hreflang="ja" href="https://screwfast.uk/ja"',
    'hreflang="zh-CN" href="https://screwfast.uk/zh-cn"',
  ],
  '/fr/404/': ['<html lang="fr"'],
  '/de/404/': ['<html lang="de"'],
  '/es/404/': ['<html lang="es"'],
  '/fa/404/': ['<html lang="fa" dir="rtl"'],
  '/ja/404/': ['<html lang="ja"'],
  '/zh-cn/404/': ['<html lang="zh-CN"'],
  '/contact/': ['data-demo-form', 'data-demo-status'],
  '/fr/contact/': ['data-demo-form', 'data-demo-status'],
  '/blog/post-1/': ['"@type":"BlogPosting"'],
  '/fr/blog/post-1/': ['"inLanguage":"fr"'],
  '/de/blog/post-1/': ['"inLanguage":"de"'],
  '/es/blog/post-1/': ['"inLanguage":"es"'],
  '/fa/blog/post-1/': ['"inLanguage":"fa"'],
  '/ja/blog/post-1/': ['"inLanguage":"ja"'],
  '/zh-cn/blog/post-1/': ['"inLanguage":"zh-CN"'],
};

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.avif': 'image/avif',
  '.webp': 'image/webp',
  '.png': 'image/png',
};

function resolvePath(urlPath) {
  let pathname = decodeURIComponent(urlPath.split('?')[0]);
  if (pathname.includes('\0') || /(?:^|[/\\])\.\.(?:[/\\]|$)/.test(pathname)) {
    throw Object.assign(new Error('Invalid path'), { code: 'EINVAL' });
  }
  if (pathname.endsWith('/')) pathname += 'index.html';
  else if (!extname(pathname)) pathname += '/index.html';
  if (pathname === '/404/index.html') pathname = '/404.html';

  const filePath = resolve(DIST, pathname.replace(/^[/\\]+/, ''));
  const rel = relative(DIST, filePath);
  if (rel.startsWith('..') || isAbsolute(rel)) {
    throw Object.assign(new Error('Path escapes dist'), { code: 'EACCES' });
  }
  return filePath;
}

async function run() {
  const server = createServer(async (req, res) => {
    try {
      const filePath = resolvePath(req.url || '/');
      const data = await readFile(filePath);
      const type = MIME[extname(filePath)] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': type });
      res.end(data);
    } catch {
      try {
        const data = await readFile(resolve(DIST, '404.html'));
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data);
      } catch {
        res.writeHead(404);
        res.end('Not found');
      }
    }
  });

  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });

  const { port } = server.address();
  const base = `http://127.0.0.1:${port}`;

  let failed = false;
  try {
    for (const route of ROUTES) {
      const res = await fetch(`${base}${route}`);
      const ok = route === '/404' ? res.status === 404 || res.ok : res.ok;
      if (!ok) {
        console.error(`FAIL ${route} → ${res.status}`);
        failed = true;
        continue;
      }
      const html = await res.text();
      const missing = (EXPECTATIONS[route] ?? []).filter(
        needle => !html.includes(needle)
      );
      if (missing.length) {
        console.error(`FAIL ${route} → missing ${missing.join(', ')}`);
        failed = true;
      } else {
        console.log(`OK   ${route} → ${res.status}`);
      }
    }
  } finally {
    server.close();
  }

  if (failed) process.exit(1);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
