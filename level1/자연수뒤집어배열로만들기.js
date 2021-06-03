function solution(n) {
  return String(n)
    .split('')
    .reverse()
    .map((n) => Number(n));
}
