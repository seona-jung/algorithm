function solution(n, computers) {
  // DFS로 쭉 가~ 처음 지점에서 count 올린다!
  // 쭉 가면서는 isVisited 체크 해야 한다!

  let count = 0;
  const isVisited = Array(n).fill(false);

  const dfs = (i) => {
    // i번째 배열에서 1인 애들만 탐색
    if (isVisited[i]) return;
    isVisited[i] = true;

    for (let j = 0; j < n; j++) if (computers[i][j]) dfs(j);
  };

  for (let i = 0; i < n; i++) {
    if (!isVisited[i]) {
      dfs(i);
      count++;
    }
  }

  return count;
}
