export function formatMoney(amount) {
  const n = Math.round(Number(amount) * 100) / 100;
  return `$${n.toFixed(2)}`;
}
