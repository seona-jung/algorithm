function solution(n) {
  // 처음엔 모두 소수로 보고 1 할당
  // 인덱스와 수 맞추기 위해 요소 개수 n+1로 배열 생성
  const primes = Array(n + 1).fill(1);

  // 0과 1은 사용하지 않을 것임. (1은 소수 아님)
  primes[0] = primes[1] = 0;

  // 에라토스테네스의 체
  // 1~n까지 소수 => sqrt(n)보다 작은 소수의 배수는 모두 소수가 아니다.

  for (let i = 2; i * i <= n; i++) {
    if (primes[i]) {
      // i * k (k < i)까지는 이미 검사되었으므로 j 시작 값은 i * 2에서 i * i로 개선할 수 있다.
      for (let j = i * i; j <= n; j += i) primes[j] = 0;
    }
  }
  return primes.reduce((acc, cur) => acc + cur);
}
