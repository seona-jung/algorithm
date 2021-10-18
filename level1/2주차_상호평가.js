const getGrade = (score) => {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 50) return 'D';
  else return 'F';
};

function solution(scores) {
  let result = '';
  const length = scores.length;

  for (let i = 0; i < length; i++) {
    let max = -1;
    let maxCnt = 0;
    let min = 101;
    let minCnt = 0;
    let sum = 0;

    for (let j = 0; j < length; j++) {
      const score = scores[j][i];
      sum += score;
      if (score > max) {
        max = score;
        maxCnt = 0;
      } else if (score === max) {
        maxCnt++;
      }

      if (score < min) {
        min = score;
        minCnt = 0;
      } else if (score === min) {
        minCnt++;
      }
    }

    if (
      (max === scores[i][i] && maxCnt === 0) ||
      (min === scores[i][i] && minCnt === 0)
    ) {
      result += getGrade((sum - scores[i][i]) / (length - 1));
      continue;
    }
    result += getGrade(sum / length);
  }

  return result;
}
