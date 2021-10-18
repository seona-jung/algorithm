const getWinningRate = (result) => {
  let winCnt = 0;
  let totalCnt = result.length;
  for (let i = 0; i < result.length; i++) {
    if (result[i] === 'N') {
      totalCnt--;
      continue;
    }
    if (result[i] === 'W') winCnt++;
  }
  if (totalCnt === 0) return 0;
  return winCnt / totalCnt;
};

const winCntAgainstHeavier = (weights, weight, result) => {
  let winCnt = 0;
  for (let i = 0; i < weights.length; i++) {
    if (weights[i] > weight && result[i] === 'W') {
      winCnt++;
    }
  }
  return winCnt;
};

function solution(weights, head2head) {
  // 1. 전체 승률 큰 선수
  // 2. 자신보다 몸무게 무거운 복서 이긴 횟수 많은 선수
  // 3. 몸무게가 무거운 선수
  // 4. 작은 번호 선수
  const indexArray = Array(weights.length)
    .fill()
    .map((_, idx) => idx);

  indexArray.sort(
    (a, b) =>
      getWinningRate(head2head[b]) - getWinningRate(head2head[a]) ||
      winCntAgainstHeavier(weights, weights[b], head2head[b]) -
        winCntAgainstHeavier(weights, weights[a], head2head[a]) ||
      weights[b] - weights[a]
  );

  //   indexArray.sort((a, b) => {
  //     const firstSortingResult =
  //       getWinningRate(head2head[b]) - getWinningRate(head2head[a]);
  //     if (firstSortingResult !== 0) return firstSortingResult;

  //     const secondSortingResult =
  //       winCntAgainstHeavier(weights, weights[b], head2head[b]) -
  //       winCntAgainstHeavier(weights, weights[a], head2head[a]);
  //     if (secondSortingResult !== 0) return secondSortingResult;

  //     const thirdSortingResult = weights[b] - weights[a];
  //     return thirdSortingResult;
  //   });

  // indexArray
  //   .sort((a, b) => weights[b] - weights[a])
  //   .sort(
  //     (a, b) =>
  //       winCntAgainstHeavier(weights, weights[b], head2head[b]) -
  //       winCntAgainstHeavier(weights, weights[a], head2head[a])
  //   )
  //   .sort(
  //     (a, b) => getWinningRate(head2head[b]) - getWinningRate(head2head[a])
  //   );

  return indexArray.map((idx) => idx + 1);
}
