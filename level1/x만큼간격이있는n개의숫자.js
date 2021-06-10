function solution(x, n) {
  const arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(x * i);
  }

  return arr;

  // 다른 사람은 이렇게 간단히.. Array(), fill, map 한방에 쓰는 거 생각하기 어렵 ㅠㅠ
  // return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
