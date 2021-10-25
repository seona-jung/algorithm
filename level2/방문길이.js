function solution(dirs) {
  const moves = {
    '-5': {},
    '-4': {},
    '-3': {},
    '-2': {},
    '-1': {},
    0: {},
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
  };

  let currentX = 0;
  let currentY = 0;
  let answer = 0;

  for (let i = 0; i < dirs.length; i++) {
    if (dirs[i] === 'L') {
      if (currentX - 1 < -5) continue;
      if (
        !(
          moves[currentX][currentY] && moves[currentX][currentY].includes('L')
        ) &&
        !(
          moves[currentX - 1][currentY] &&
          moves[currentX - 1][currentY].includes('R')
        )
      )
        answer++;

      if (!moves[currentX][currentY]) moves[currentX][currentY] = [];
      moves[currentX][currentY].push('L');
      currentX--;
    }
    if (dirs[i] === 'R') {
      if (currentX + 1 > 5) continue;
      if (
        !(
          moves[currentX][currentY] && moves[currentX][currentY].includes('R')
        ) &&
        !(
          moves[currentX + 1][currentY] &&
          moves[currentX + 1][currentY].includes('L')
        )
      )
        answer++;

      if (!moves[currentX][currentY]) moves[currentX][currentY] = [];
      moves[currentX][currentY].push('R');
      currentX++;
    }
    if (dirs[i] === 'D') {
      if (currentY - 1 < -5) continue;
      if (
        !(
          moves[currentX][currentY] && moves[currentX][currentY].includes('D')
        ) &&
        !(
          moves[currentX][currentY - 1] &&
          moves[currentX][currentY - 1].includes('U')
        )
      )
        answer++;

      if (!moves[currentX][currentY]) moves[currentX][currentY] = [];
      moves[currentX][currentY].push('D');
      currentY--;
    }
    if (dirs[i] === 'U') {
      if (currentY + 1 > 5) continue;
      if (
        !(
          moves[currentX][currentY] && moves[currentX][currentY].includes('U')
        ) &&
        !(
          moves[currentX][currentY + 1] &&
          moves[currentX][currentY + 1].includes('D')
        )
      )
        answer++;

      if (!moves[currentX][currentY]) moves[currentX][currentY] = [];
      moves[currentX][currentY].push('U');
      currentY++;
    }
  }

  return answer;
}

// * 다른 사람 풀이 1
// ! 길은 .5라고 생각해라!
// const solution = (dirs) => {
//   let coordinates = {
//     x: 0,
//     y: 0,
//   };

//   return dirs.split('').reduce((acc, dir) => {
//     let { x, y } = coordinates;

//     switch (dir) {
//       case 'U':
//         if (y === 5) break;
//         acc.add(`${x}/${y + 0.5}`);
//         coordinates.y++;
//         break;
//       case 'D':
//         if (y === -5) break;
//         acc.add(`${x}/${y - 0.5}`);
//         coordinates.y--;
//         break;
//       case 'R':
//         if (x === 5) break;
//         acc.add(`${x + 0.5}/${y}`);
//         coordinates.x++;
//         break;
//       case 'L':
//         if (x === -5) break;
//         acc.add(`${x - 0.5}/${y}`);
//         coordinates.x--;
//         break;
//     }

//     return acc;
//   }, new Set()).size;
// };

// * 다른 사람 풀이 2
// ! x, y, newX, newY 순서로 구성된 문자열을 set에 넣어 지나간 길을 판단하라!
// function solution(dirs) {
//   const firstPathMap = new Map();
//   let now = [0, 0];
//   let moved;
//   for (let dir of dirs) {
//     moved = move(now, dir);
//     if (moved[0] < -5 || moved[0] > 5 || moved[1] < -5 || moved[1] > 5) {
//       continue;
//     }
//     firstPathMap.set(generateKey(now, moved), true);
//     now = moved;
//   }

//   return firstPathMap.size;
// }

// function move(now, dir) {
//   switch (dir) {
//     case 'L':
//       return [now[0] - 1, now[1]];
//     case 'R':
//       return [now[0] + 1, now[1]];
//     case 'U':
//       return [now[0], now[1] + 1];
//     case 'D':
//       return [now[0], now[1] - 1];
//   }
// }

// function generateKey(now, moved) {
//   return `${Math.min(now[0], moved[0])},${Math.max(
//     now[0],
//     moved[0]
//   )},${Math.min(now[1], moved[1])},${Math.max(now[1], moved[1])}`;
// }
