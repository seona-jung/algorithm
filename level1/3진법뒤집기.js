function solution(n) {
  const ternary = [];
  while (n > 0) {
    ternary.push(n % 3);
    n = parseInt(n / 3);
  }

  let decimal = 0;
  for (let i = ternary.length - 1; i >= 0; i--) {
    decimal += ternary[i] * Math.pow(3, ternary.length - (i + 1));
  }

  return decimal;
}
