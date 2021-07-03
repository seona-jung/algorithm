function solution(tickets) {
  // 방문하는 공항 경로를 배열에 담아라..?
  // 경로를 기억해라..? => DFS(?)

  // 근데 풀고 보니까 맨 처음 찾으면 바로 종료하는 걸로 봐선 BFS 같기도 한데.. 일단 내일 다시 본다..

  let result; // 여기에는 정답으로 될 경로를 저장해라!

  // 각 DFS마다 isVisited를 관리해라. (isVisited에는 tickets의 index를 넣어서 관리한다.)
  const dfs = (isVisited, departure, index, tmpResult) => {
    if (result !== undefined) return;

    // 그 전에 검사한 경로라면 바로 종료해버린다.
    if (isVisited.indexOf(index) !== -1) return;

    // result에 넣는다.
    tmpResult = [...tmpResult, departure];

    // 방문한 경로 체크
    isVisited = [...isVisited, index];

    // 다 돌았으면 종료한다.
    if (isVisited.length === tickets.length + 1) {
      // 맨 처음으로 도달하는 애만 넣어준다.
      if (result === undefined) result = tmpResult;
      return;
    }

    const willBeDeparture = [];
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i][0] === departure) {
        // [도착지, 그 경로 인덱스]
        willBeDeparture.push([tickets[i][1], i]);
      }
    }

    // willBeDeparture가 빈 배열이면 경로가 막혔다! 종료!
    if (!willBeDeparture.length) {
      return;
    }

    willBeDeparture.sort((a, b) => {
      return a[0].localeCompare(b[0]);
    });

    for (const d of willBeDeparture) {
      const tmp = dfs(isVisited, d[0], d[1], tmpResult);
      if (tmp !== undefined) {
        result = tmp;
      }
    }
  };

  dfs([], 'ICN', -1, []); // 절대 없을 인덱스를 보낸다.

  return result;
}
