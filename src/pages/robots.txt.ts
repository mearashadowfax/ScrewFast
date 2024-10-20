import type { APIRoute } from 'astro';

const robotsTxt = `
User-agent: *
Disallow: /

# Explicitly disallow all known major bot user agents
User-agent: Googlebot
Disallow: /

User-agent: Bingbot
Disallow: /

User-agent: Slurp
Disallow: /

User-agent: DuckDuckBot
Disallow: /

User-agent: Baiduspider
Disallow: /

User-agent: YandexBot
Disallow: /

User-agent: Sogou
Disallow: /

User-agent: Exabot
Disallow: /

# No sitemap in development environment
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
};

/* // https://docs.astro.build/en/guides/integrations-guide/sitemap/#usage
import type { APIRoute } from 'astro';

const robotsTxt = `
User-agent: Googlebot
Disallow:
Allow: /
Crawl-delay: 10

User-agent: Yandex
Disallow:
Allow: /
Crawl-delay: 2

User-agent: archive.org_bot
Disallow:
Allow: /
Crawl-delay: 2

User-agent: *
Disallow: /

Sitemap: ${new URL('sitemap-index.xml', import.meta.env.SITE).href}
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}; */