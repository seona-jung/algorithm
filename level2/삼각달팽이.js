function solution(n) {
  const triangle = Array(n)
    .fill()
    .map((_, idx) => Array(idx + 1).fill(0));

  // DOWN -> RIGHT -> UP -> DOWN ...
  // 근데 UP일 때는 검사하는 col index를 하나씩 줄여가면서!

  const MOVES = {
    0: [1, 0], // DOWN
    1: [0, 1], // RIGHT
    2: [-1, -1], // UP
  };

  let cellCount = 0;
  for (let i = 1; i <= n; i++) cellCount += i;
  let step = 1;

  let row = 0;
  let col = 0;
  let curDir = 0; // DOWN

  while (step <= cellCount) {
    triangle[row][col] = step;
    const [dRow, dCol] = MOVES[curDir];
    const [newRow, newCol] = [row + dRow, col + dCol];
    if (
      triangle[newRow]?.[newCol] === undefined ||
      triangle[newRow][newCol] !== 0
    ) {
      curDir = (curDir + 1) % 3;
      row += MOVES[curDir][0];
      col += MOVES[curDir][1];
    } else {
      [row, col] = [newRow, newCol];
    }
    step++;
  }

  return triangle.flat();
}
