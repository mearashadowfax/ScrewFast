import fs from 'node:fs/promises';
import { globby } from 'globby';
import { minify } from 'html-minifier-terser';

// Prefer Vercel adapter output when present; otherwise minify Astro's default `dist/`.
async function resolveOutputPath() {
  const candidates = ['./.vercel/output/static', './dist'];
  for (const candidate of candidates) {
    try {
      await fs.access(candidate);
      return candidate;
    } catch {
      // try next
    }
  }
  return null;
}

const path = await resolveOutputPath();
if (!path) {
  console.log(
    'No build output found to minify (checked .vercel/output/static and dist).'
  );
  process.exit(0);
}

const files = await globby(`${path}/**/*.html`);
if (files.length === 0) {
  console.log(`No HTML files found under ${path}.`);
  process.exit(0);
}

await Promise.all(
  files.map(async file => {
    console.log('Processing file:', file);
    let html = await fs.readFile(file, 'utf-8');

    html = await minify(html, {
      removeComments: true,
      preserveLineBreaks: true,
      collapseWhitespace: true,
      minifyJS: true,
    });
    await fs.writeFile(file, html);
  })
);
