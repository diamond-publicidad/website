import { siteBaseUrl } from '../config/site';

export const prerender = true;

export function GET() {
  const sitemapUrl = new URL('sitemap.xml', siteBaseUrl).href;

  return new Response(`User-agent: *\nAllow: /\nSitemap: ${sitemapUrl}\n`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}