function solution(clothes) {
  const closet = {};

  clothes.forEach((c) => {
    if (!closet[c[1]]) closet[c[1]] = [c[0]];
    else closet[c[1]].push(c[0]);
  });

  // 각 part마다 안 끼거나 1개만 낄 수 있다.
  // 1 + length

  const counts = [];
  for (const part in closet) {
    counts.push(1 + closet[part].length);
  }

  return counts.reduce((acc, cur) => (acc *= cur), 1) - 1;
}
