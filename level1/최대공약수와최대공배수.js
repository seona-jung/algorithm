function solution(n, m) {
  if (m % n === 0) return [n, m];

  for (let i = n; i > 0; i--) {
    if (n % i === 0 && m % i === 0) return [i, (n * m) / i];
  }
}

// ----- 다른 사람 풀이 -----
function solution(a, b) {
  const gcd = function (b, a) {
    const r = b % a;
    return r ? gcd(a, r) : a;
  };
  return [gcd(b, a), (b * a) / gcd(b, a)];
}
