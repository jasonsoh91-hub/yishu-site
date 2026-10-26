/** Replace {key} tokens in a template string. */
export function fill(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (m, k: string) => (k in vars ? String(vars[k]) : m));
}

/** "RM 3,500" style: symbol, space, grouped integer (no decimals unless needed). */
export function formatMoney(
  amount: number,
  currency: { symbol: string; locale: string },
): string {
  const n = new Intl.NumberFormat(currency.locale, {
    maximumFractionDigits: Number.isInteger(amount) ? 0 : 2,
    minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
  }).format(amount);
  return `${currency.symbol} ${n}`;
}
