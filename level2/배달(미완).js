function solution(N, road, K) {
  const villages = {};
  for (let i = 1; i <= N; i++) villages[i] = {};

  road.forEach(([v1, v2, w]) => {
    if (!villages[v1][v2]) villages[v1][v2] = w;
    else if (villages[v1][v2] > w) villages[v1][v2] = w;

    if (!villages[v2][v1]) villages[v2][v1] = w;
    else if (villages[v2][v1] > w) villages[v2][v1] = w;
  });

  let queue = [];
  const isVisited = {};
  let count = 1;
  queue.push(['1', 0]);
  isVisited[1] = true;

  while (queue.length > 0) {
    const [current, weight] = queue.shift();
    for (const adjacency in villages[current]) {
      const newWeight = villages[current][adjacency] + weight;

      if (isVisited[adjacency]) {
        // queue에 들어있는 weight가 지금 newWeight보다 크다면 갱신
        queue = queue.map(([v, w]) => {
          if (v === adjacency && w > newWeight) {
            return [v, newWeight];
          }
          return [v, w];
        });
        continue;
      }

      if (newWeight <= K) {
        count++;
        isVisited[adjacency] = true;
        queue.push([adjacency, newWeight]);
      }
    }
  }
  return count;
}
