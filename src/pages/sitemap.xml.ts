import { localeSlugs } from '../i18n';
import { siteBaseUrl } from '../config/site';

export const prerender = true;

const publicPaths = ['', 'servicios/', 'nuestra-historia/'];

export function GET() {
  const urls = localeSlugs.flatMap((locale) =>
    publicPaths.map((path) => new URL(`${locale}/${path}`, siteBaseUrl).href),
  );
  const entries = urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}