function solution(rows, columns, queries) {
  // (x1, y1)에서 출발, 처음엔 오른쪽으로 진행
  // y가 y2가 되면 아래로 방향 전환
  // x가 x2가 되면 왼쪽으로 방향 전환
  // y가 y1이 되면 위로 방향 전환
  // x가 x1이 되면 회전 종료 (while문 조건)

  const arr = Array(rows)
    .fill()
    .map((_, rIdx) =>
      Array(columns)
        .fill()
        .map((_, cIdx) => rIdx * columns + cIdx + 1)
    );

  const MOVES = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const mins = [];

  for (const query of queries) {
    let [x1, y1, x2, y2] = query.map((_) => _ - 1);
    // (x1, y1)에서 시작

    let x = x1;
    let y = y1;

    let remember = arr[x][y];
    let tmp;

    let min = arr[x][y];

    let moveX, moveY;

    do {
      if (x === x1 && y === y1) [moveX, moveY] = MOVES[0];
      else if (x === x1 && y === y2) [moveX, moveY] = MOVES[1];
      else if (x === x2 && y === y2) [moveX, moveY] = MOVES[2];
      else if (x === x2 && y === y1) [moveX, moveY] = MOVES[3];

      tmp = arr[x + moveX][y + moveY];
      arr[x + moveX][y + moveY] = remember;
      remember = tmp;
      if (remember < min) {
        min = remember;
      }
      x += moveX;
      y += moveY;
    } while (x !== x1 || y !== y1);

    mins.push(min);
  }

  return mins;
}
