function solution(k, dungeons) {
  // 순열 -> 완전 탐색

  let answer = 0;

  const DFS = (hp = k, count = 0, lookup = [...dungeons]) => {
    if (hp < 0) return;
    answer = Math.max(count, answer);

    for (let i = 0; i < lookup.length; i++) {
      if (hp < lookup[i][0]) continue;
      const newHP = hp - lookup[i][1];
      const clone = lookup.filter((_, idx) => idx !== i);
      DFS(newHP, count + 1, clone);
    }
  };

  DFS();

  return answer;
}
