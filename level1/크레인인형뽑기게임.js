// 선아

function solution(board, moves) {
  const bag = [];
  let count = 0;

  // 2nd array transpose function
  const transpose = (array) => array[0].map((x, i) => array.map((x) => x[i]));

  // 그리고 각 배열 안의 요소를 뒤집는다;;
  board = transpose(board)
    .map((el) => el.reverse())
    .map((arr) => arr.filter((num) => num !== 0));

  moves.forEach((move) => {
    if (board[move - 1].length !== 0) {
      const popped = board[move - 1].pop();
      if (bag.slice(-1)[0] === popped) {
        bag.pop();
        count += 2;
      } else {
        bag.push(popped);
      }
    }
  });

  return count;
}
