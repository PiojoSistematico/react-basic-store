const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

export default function formatCurrency(price: number): string {
  return CURRENCY_FORMATTER.format(price);
}
