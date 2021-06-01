function solution(n) {
  let sum = 0;
  const sqrt = Math.sqrt(n);
  for (let i = 1; i < sqrt; i++) {
    if (n % i === 0) {
      sum += i + n / i;
    }
  }
  if (sqrt === parseInt(sqrt)) sum += sqrt;
  return sum;
}
