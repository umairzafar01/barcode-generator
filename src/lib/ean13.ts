export function generateEAN13(): string {
  // Generate random 12-digit base
  const base = Array.from({ length: 12 }, () =>
    Math.floor(Math.random() * 10)
  ).join("");

  let sum = 0;

  for (let i = 0; i < 12; i++) {
    const digit = Number(base[i]);
    sum += digit * (i % 2 === 0 ? 1 : 3);
  }

  const checksum = (10 - (sum % 10)) % 10;

  return base + checksum;
}
