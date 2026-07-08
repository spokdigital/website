export const isValidUrl = (url: string): { valid: boolean; full: string } => {
  try {
    const full = url.startsWith("http") ? url : `https://${url}`;
    const parsed = new URL(full);
    const parts = parsed.hostname.split(".");
    const tld = parts.at(-1) ?? "";
    if (parts.length < 2 || tld.length < 2 || !/^[a-zA-Z]+$/.test(tld))
      return { valid: false, full };
    return { valid: true, full };
  } catch {
    return { valid: false, full: url };
  }
};