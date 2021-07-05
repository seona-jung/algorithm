function solution(n, a, b) {
  // b < a면 자릴 바꿔라.
  if (b < a) [a, b] = [b, a];

  for (let i = 1; ; i++) {
    if (a % 2 && a + 1 === b) return i;
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
  }
}
