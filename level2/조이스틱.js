function solution(name) {
  const charCodeOfA = 'A'.charCodeAt(0);

  const gaps = name.split('').map((n) => {
    let step = n.charCodeAt(0) - charCodeOfA;
    if (step > 13) step = 26 - step;
    return step;
  });

  // 0이 없다면? 그냥 gaps 원소의 합 + gaps.length - 1이 답임!
  if (gaps.indexOf(0) === -1)
    return gaps.reduce((acc, cur) => acc + cur) + gaps.length - 1;

  // 0이 있을 때가 문제!! (무시해야 하는 'A'가 있을 때)

  // 왼쪽 이동 -> 0일 때만 맨 마지막 원소로 이동
  // 오른쪽 이동 -> length - 1일때만 맨 처음 원소로 이동

  // 방문한 애는 0으로 만들어 버린다!

  let result = 0;
  let i = 0;
  while (true) {
    result += gaps[i];
    gaps[i] = 0; // 0으로 바꿔주기

    // 이동 방향 결정!
    // 0이 아닌 것이 나오는 순간이 더 가까운쪽으로 간다!
    // 오른쪽까지의 거리, 왼쪽까지의 거리
    // 양쪽 거리가 같다면 오른쪽으로 가라!

    // 오른쪽 이동
    let rightCount = 0;
    let j = i;
    while (rightCount < gaps.length) {
      rightCount++;
      if (j === gaps.length - 1) j = 0;
      else j++;
      if (gaps[j] !== 0) break;
    }

    // 왼쪽 이동
    let leftCount = 0;
    j = i;
    while (leftCount < gaps.length) {
      leftCount++;
      if (j === 0) j = gaps.length - 1;
      else j--;
      if (gaps[j] !== 0) break;
    }

    if (leftCount === gaps.length && rightCount === gaps.length) return result;

    const minStep = Math.min(rightCount, leftCount);
    if (minStep === rightCount) {
      // 오른쪽으로 가자
      for (let j = 0; j < minStep; j++) {
        // 근데 i가 gaps.length -1일 때는
        if (i === gaps.length - 1) i = 0;
        else i++;
      }
    } else {
      // 왼쪽으로 가자
      for (let j = 0; j < minStep; j++) {
        // 근데 i가 0일 때는
        if (i === 0) i = gaps.length - 1;
        else i--;
      }
    }
    result += minStep;
  }
}
