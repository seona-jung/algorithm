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

// * 다른 사람 풀이
// ! visited 배열을 DFS 함수 실행 전에 true로 하고, 실행하고 나면 false로 해라.

function solution(k, d) {
  const N = d.length;
  const visited = new Array(N).fill(0);
  let ans = 0;

  function dfs(k, cnt) {
    ans = Math.max(cnt, ans);

    for (let j = 0; j < N; j++) {
      if (k >= d[j][0] && !visited[j]) {
        visited[j] = 1;
        dfs(k - d[j][1], cnt + 1);
        visited[j] = 0;
      }
    }
  }

  dfs(k, 0);
  return ans;
}
