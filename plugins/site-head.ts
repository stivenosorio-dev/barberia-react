import type { Plugin } from 'vite';
import { siteConfig } from '../src/config/site.config.ts';

const paletteVariables = (palette: typeof siteConfig.theme.colors.light) =>
  Object.entries(palette)
    .map(([name, value]) => `--site-color-${name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}:${value}`)
    .join(';');

const escapeHtml = (value: string) =>
  value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

const escapeXml = (value: string) =>
  value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');

const radiusValues = { none: '0', sm: '0.125rem', md: '0.375rem', lg: '0.5rem', xl: '0.75rem' } as const;

const googleFontFamilies = [siteConfig.fonts.display, siteConfig.fonts.body]
  .filter((font, index, fonts) => fonts.findIndex(({ family }) => family === font.family) === index)
  .map(({ family, weights }) => {
    const requestedWeights = [...new Set(weights)].sort((a, b) => a - b).join(';');
    return `family=${encodeURIComponent(family).replaceAll('%20', '+')}:wght@${requestedWeights}`;
  })
  .join('&');

const fontCss = (font: typeof siteConfig.fonts.display) =>
  `${JSON.stringify(font.family)},${font.fallback}`;

const themeStyle = `:root{${paletteVariables(siteConfig.theme.colors.light)};--radius:${radiusValues[siteConfig.theme.radius]};--site-font-display:${fontCss(siteConfig.fonts.display)};--site-font-body:${fontCss(siteConfig.fonts.body)}}.dark{${paletteVariables(siteConfig.theme.colors.dark)}}`;

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': siteConfig.seo.schemaType,
  name: siteConfig.business.name,
  description: siteConfig.seo.description,
  url: siteConfig.seo.canonicalUrl,
  image: siteConfig.seo.ogImage,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  priceRange: siteConfig.seo.priceRange,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.contact.address,
    addressLocality: siteConfig.business.city,
    addressRegion: siteConfig.business.neighborhood,
    addressCountry: 'CO',
  },
  geo: siteConfig.seo.geo && {
    '@type': 'GeoCoordinates',
    latitude: siteConfig.seo.geo.latitude,
    longitude: siteConfig.seo.geo.longitude,
  },
};

const antiFlickerScript = `(()=>{let mode=${JSON.stringify(siteConfig.theme.defaultMode)};${siteConfig.theme.allowToggle ? "try{const saved=localStorage.getItem('theme');if(saved==='light'||saved==='dark')mode=saved}catch{}" : ''}if(mode==='system')mode=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';const root=document.documentElement;root.classList.toggle('dark',mode==='dark');root.style.colorScheme=mode;const meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.setAttribute('content',mode==='dark'?${JSON.stringify(siteConfig.theme.colors.dark.bg)}:${JSON.stringify(siteConfig.theme.colors.light.bg)})})();`;

export function siteHeadPlugin(): Plugin {
  return {
    name: 'agenda-local-site-head',
    generateBundle() {
      const canonicalUrl = new URL(siteConfig.seo.canonicalUrl).toString();
      const sitemapUrl = new URL('sitemap.xml', canonicalUrl).toString();
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`,
      });
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${escapeXml(canonicalUrl)}</loc></url></urlset>\n`,
      });
    },
    transformIndexHtml(html) {
      const withTitle = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(siteConfig.seo.title)}</title>`);
      const withLocale = withTitle.replace(/<html\b([^>]*)\blang=(['"])[^'"]*\2/i, `<html$1lang="${escapeHtml(siteConfig.business.locale)}"`);
      const canonical = escapeHtml(siteConfig.seo.canonicalUrl);
      const description = escapeHtml(siteConfig.seo.description);
      const tags = [
        { tag: 'meta', attrs: { name: 'description', content: description }, injectTo: 'head' as const },
        { tag: 'link', attrs: { rel: 'canonical', href: canonical }, injectTo: 'head' as const },
        { tag: 'meta', attrs: { property: 'og:type', content: 'website' }, injectTo: 'head' as const },
        { tag: 'meta', attrs: { property: 'og:title', content: escapeHtml(siteConfig.seo.title) }, injectTo: 'head' as const },
        { tag: 'meta', attrs: { property: 'og:description', content: description }, injectTo: 'head' as const },
        { tag: 'meta', attrs: { property: 'og:url', content: canonical }, injectTo: 'head' as const },
        { tag: 'meta', attrs: { property: 'og:image', content: escapeHtml(siteConfig.seo.ogImage) }, injectTo: 'head' as const },
        { tag: 'meta', attrs: { name: 'theme-color', content: siteConfig.theme.colors.light.bg }, injectTo: 'head' as const },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' }, injectTo: 'head' as const },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }, injectTo: 'head' as const },
        { tag: 'link', attrs: { rel: 'preload', as: 'style', href: `https://fonts.googleapis.com/css2?${googleFontFamilies}&display=swap`, onload: "this.onload=null;this.rel='stylesheet'" }, injectTo: 'head' as const },
        { tag: 'style', children: themeStyle, injectTo: 'head' as const },
        { tag: 'script', attrs: { type: 'application/ld+json' }, children: JSON.stringify(businessSchema).replaceAll('<', '\\u003c'), injectTo: 'head' as const },
        { tag: 'script', children: antiFlickerScript, injectTo: 'head' as const },
      ];
      return { html: withLocale, tags };
    },
  };
}
