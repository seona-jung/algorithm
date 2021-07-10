function solution(expression) {
  const expressionArr = expression.split(/([+*-])/g);

  const operator = ['+', '-', '*'];
  const candidate = [];

  for (const op of operator) {
    if (expressionArr.indexOf(op) != -1) candidate.push(op);
  }

  // 순열 배열 만드는 함수 만들기 (permutation)
  const permutation = (arr, selectNum) => {
    const result = [];
    if (selectNum === 1) return arr.map((v) => [v]);
    arr.forEach((v, idx, arr) => {
      const fixer = v;
      const restArr = arr.filter((_, index) => index !== idx);
      const permutationArr = permutation(restArr, selectNum - 1);
      const combineFixer = permutationArr.map((v) => [fixer, ...v]);
      result.push(...combineFixer);
    });
    return result;
  };

  const permutedArr = permutation(candidate, candidate.length);

  // 우선순위 순열별로 다 계산한 값 담은 배열 만들기
  const result = [];
  for (const permuted of permutedArr) {
    let clone = [...expressionArr];
    for (const operator of permuted) {
      const tmp = [];
      for (let i = 0; i < clone.length; i++) {
        if (clone[i] !== operator) {
          tmp.push(clone[i]);
        } else {
          const before = tmp.pop();
          const after = clone[i + 1];
          tmp.push(eval(`${before}${clone[i]}${after}`));
          i++;
        }
      }
      clone = tmp;
    }
    result.push(Math.abs(...clone));
  }

  return Math.max(...result);
}
