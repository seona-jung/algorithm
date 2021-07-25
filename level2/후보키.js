function solution(relation) {
  const ROW = relation.length;
  const COLUMN = relation[0].length;

  const candidate = [];

  // 키의 개수가 1개일 때 가능한 후보키들 먼저 체크
  for (let col = 0; col < COLUMN; col++) {
    const tmpArr = [];
    for (let row = 0; row < ROW; row++) tmpArr.push(relation[row][col]);
    let flag = false;
    tmpArr.forEach((el, idx) => {
      if (tmpArr.indexOf(el) !== idx) {
        flag = true;
        return;
      }
    });
    if (!flag) {
      candidate.push(col);
    }
  }

  let combination = [];
  // 조합을 만들 때 이미 후보키에 있는 열은 제외하고 만들기.
  const getCombination = (index = 0, arr = []) => {
    if (index === COLUMN) return combination.push(arr);

    getCombination(index + 1, arr);
    if (candidate.indexOf(index) === -1)
      getCombination(index + 1, [...arr, index]);
  };
  getCombination();

  // 만들어진 조합을 개수순으로 정렬하기
  combination.sort((a, b) => a.length - b.length);

  // 길이가 1이하인 조합은 제외시키기
  for (let i = 0; i < combination.length; i++) {
    if (combination[i].length >= 2) {
      combination = combination.slice(i);
      break;
    }
  }

  // 조합 배열을 검사하면서 후보키인 조합을 발견하면
  // 그 다음 조합들을 검사하면서 그 키들을 동시에 갖고 있는 조합은 조합 배열에서 제거하기
  for (let i = 0; i < combination.length; i++) {
    const tmpArr = [];
    for (let row = 0; row < ROW; row++) {
      let tmpStr = '';
      for (const col of combination[i]) {
        tmpStr += relation[row][col];
      }
      tmpArr.push(tmpStr);
    }
    let flag = false;
    tmpArr.forEach((el, idx) => {
      if (tmpArr.indexOf(el) !== idx) {
        flag = true;
        return;
      }
    });
    // combination[i]가 후보키로 가능한 아이라면 후보키에 넣고
    // 그 다음 조합들을 검사하면서 그 키들을 동시에 갖고 있는 조합은 조합 배열에서 제거하기
    if (!flag) {
      candidate.push(combination[i]);
      for (let j = i + 1; j < combination.length; j++) {
        // 길이가 더 작거나 같은 조합은 skip
        if (combination[j].length <= combination[i].length) continue;
        // 길이가 더 긴 조합만 검사
        let count = 0;
        for (const checkEl of combination[i]) {
          if (combination[j].indexOf(checkEl) !== -1) count++;
        }
        // 다 가지고 있는 조합이라면
        if (count === combination[i].length) {
          combination.splice(j, 1);
          j--; // for문용
        }
      }
    }
  }

  return candidate.length;
}
