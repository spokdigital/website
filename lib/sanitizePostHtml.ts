export function sanitizePostHtml(html: string): string {
  if (!html) return "";

  return html
    // remove empty paragraphs: <p></p>, <p> </p>, <p>&nbsp;</p>, <p><br></p>
    .replace(/<p[^>]*>(\s|&nbsp;|<br\s*\/?>)*<\/p>/gi, "")
    // remove empty headings the same way
    .replace(/<h[1-6][^>]*>(\s|&nbsp;|<br\s*\/?>)*<\/h[1-6]>/gi, "")
    // collapse "fake" headings: heading tags whose inline style forces normal size/weight back to body text
    .replace(
      /<h[1-6]([^>]*style="[^"]*(font-size:\s*(1[0-8]px|0\.\d+em|1em)|font-weight:\s*(normal|400))[^"]*"[^>]*)>([\s\S]*?)<\/h[1-6]>/gi,
      "<p>$5</p>"
    );
}