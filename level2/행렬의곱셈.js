function solution(arr1, arr2) {
  const answer = [];

  const arr1row = arr1.length;
  const arr2column = arr2[0].length;

  for (let i = 0; i < arr1row; i++) {
    answer[i] = [];
    for (let j = 0; j < arr2column; j++) {
      answer[i].push(
        arr1[i].reduce((acc, cur, idx) => acc + cur * arr2[idx][j], 0)
      );
    }
  }

  return answer;

  // 다른 사람 풀이
  // return arr1.map((row) =>
  //   arr2[0].map((x, y) => row.reduce((a, b, c) => a + b * arr2[c][y], 0))
  // );
}
