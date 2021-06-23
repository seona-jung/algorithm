function solution(maps) {
  const queue = [];
  const enqueue = (data) => queue.push(data);
  const dequeue = () => queue.shift();
  const isEmpty = () => queue.length === 0;

  const [dstCol, dstRow] = [maps.length - 1, maps[0].length - 1];
  const isValid = (col, row) =>
    col >= 0 &&
    row >= 0 &&
    col <= dstCol &&
    row <= dstRow &&
    maps[col][row] === 1;

  enqueue([0, 0, 1]);
  while (!isEmpty()) {
    const [col, row, step] = dequeue();

    if (!isValid(col, row)) continue;

    maps[col][row] = step;

    if (col === dstCol && row === dstRow) break;

    enqueue([col - 1, row, step + 1]);
    enqueue([col + 1, row, step + 1]);
    enqueue([col, row - 1, step + 1]);
    enqueue([col, row + 1, step + 1]);
  }

  return maps[dstCol][dstRow] <= 1 ? -1 : maps[dstCol][dstRow];
}
