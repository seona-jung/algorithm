function solution(n) {
  const sqrt = Math.sqrt(n);
  if (sqrt % 1 === 0) return (sqrt + 1) * (sqrt + 1);
  return -1;
}
