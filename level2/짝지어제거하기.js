function solution(s) {
  // 앞에서부터 2개씩 짝 지어 보면서 두 개가 같으면 삭제.
  // 그리고 처음부터 다시 반복문 시작
  // 반복문 돌 동안 2개 짝이 하나도 없었다면 그제서야 이 반복문 종료
  if (s.length % 2 !== 0) return 0;

  let keepGoing = true;
  while (keepGoing) {
    keepGoing = false;
    for (let i = 0; i < s.length - 1; i++) {
      if (s[i] === s[i + 1]) {
        s = s.slice(0, i) + s.slice(i + 2);
        keepGoing = true;
        break;
      }
    }
  }

  return s.length === 0 ? 1 : 0;
}
