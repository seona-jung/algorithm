function solution(name) {
  let count = 0;
  const arr = Array(name.length).fill('A');

  const alphabet = {};
  // 대문자 알파벳 26개
  for (let i = 65; i < 65 + 26; i++) {
    alphabet[String.fromCharCode(i)] = i;
  }

  //TODO: 아직 미완! 이것들을 해야 함!
  // 무시해야 하는 A 문자가 있는 경우
  // 다음에 처리할 자리가 맨 오른쪽으로 이동되어야 하는 경우
  // 다음에 처리할 자리가 이전 자리보다 왼쪽인 경우

  for (let i = 0; i < arr.length; i++) {
    // A인 곳으로는 가지도 않는다.
    // 그건 그냥 continue로 넘긴다.
    if (name[i] === 'A') {
      continue;
    }
    // name[i]랑 같아질 때까지 이동
    // 반대로 이동한 게 더 가까우면 그걸로 채택..
    let minStep = Math.abs(alphabet[name[i]] - alphabet[arr[i]]);
    if (minStep > 13) minStep = 26 - minStep;
    count += minStep;
    // 커서 이동
    count++;
  }

  // 마지막에 커서 이동한 거 제외
  return count - 1;
}
