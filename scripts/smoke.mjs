import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { join, extname } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const ROUTES = ['/', '/fr/', '/products/', '/blog/', '/contact/', '/404'];

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
  let path = decodeURIComponent(urlPath.split('?')[0]);
  if (path.endsWith('/')) path += 'index.html';
  else if (!extname(path)) path += '/index.html';
  if (path === '/404/index.html') path = '/404.html';
  return join(DIST, path.replace(/^\//, ''));
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
        const data = await readFile(join(DIST, '404.html'));
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
