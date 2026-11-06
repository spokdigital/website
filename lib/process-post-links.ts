// lib/process-post-links.ts

const attr = (attrs: string, name: string) => {
  const m = attrs.match(
    new RegExp(`\\s${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`, "i"),
  );
  return m ? (m[1] ?? m[2] ?? "") : null;
};

const removeAttr = (attrs: string, name: string) =>
  attrs.replace(
    new RegExp(`\\s${name}\\s*=\\s*(?:"[^"]*"|'[^']*')`, "gi"),
    "",
  );

const bareHost = (host: string) => host.replace(/^www\./i, "").toLowerCase();

/**
 * Post-processes saved blog HTML:
 *  - external links  -> open in a new tab, with rel="noopener noreferrer"
 *                       (any rel values you set, like nofollow or sponsored, are kept)
 *  - internal links  -> stay in the same tab, and a stray rel="nofollow" is removed
 *  - #anchors, mailto: and tel: links are left alone
 */
export function openExternalLinksInNewTab(html: string, siteUrl: string) {
  const siteHost = bareHost(new URL(siteUrl).hostname);

  return html.replace(/<a\b([^>]*)>/gi, (match, attrs: string) => {
    const href = (attr(attrs, "href") ?? "").trim();
    if (!href || href.startsWith("#") || /^(mailto:|tel:)/i.test(href)) {
      return match;
    }

    let isExternal = false;
    try {
      const u = new URL(href, siteUrl); // relative links resolve to the site
      isExternal =
        /^https?:$/.test(u.protocol) && bareHost(u.hostname) !== siteHost;
    } catch {
      return match;
    }

    const relTokens = (attr(attrs, "rel") ?? "").split(/\s+/).filter(Boolean);
    let clean = removeAttr(removeAttr(attrs, "target"), "rel");

    if (isExternal) {
      const rel = Array.from(
        new Set([...relTokens, "noopener", "noreferrer"]),
      ).join(" ");
      return `<a${clean} target="_blank" rel="${rel}">`;
    }

    // internal: keep other rel values, drop nofollow/noopener/noreferrer
    const keep = relTokens.filter(
      (t) => !["nofollow", "noopener", "noreferrer"].includes(t.toLowerCase()),
    );
    if (keep.length) clean += ` rel="${keep.join(" ")}"`;
    return `<a${clean}>`;
  });
}