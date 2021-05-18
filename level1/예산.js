function solution(d, budget) {
  d.sort((a, b) => a - b);
  let money = 0;
  for (let i = 0; i < d.length; i++) {
    if (money + d[i] > budget) return i;
    money += d[i];
  }
  return d.length;
}
