// 내 풀이
// 테스트 케이스 1~6 통과 못함 ㅠ
// 다 되는 것 같은데... 정답 풀이 보니까.. 저걸 구현하려고 이렇게 길게.. 이런 짓을 했다니 ㅠ
// 문제의 본질을 파악하자..!
function solution(numbers) {
  numbers = numbers.map((n) => n + '');
  numbers.sort((a, b) => {
    if (a[0] !== b[0]) return b[0] - a[0]; // 내림차순
    if (a[1] !== b[1]) {
      // '30' > '3'
      // 항상 자릿수 더 큰 게 크다.
      if (!a[1]) {
        // 3 30  -> 330  오름차순 / 3 38 -> 383 내림차순
        if (b[1] > b[0]) return b - a;
        return a - b;
      }
      if (!b[1]) {
        // 30 3 -> 330 오름차순 / 38 3 -> 383 내림차순
        if (a[1] > a[0]) return b - a;
        return a - b;
      }
      return b[1] - a[1];
    }
    if (a[2] !== b[2]) {
      if (!a[2]) {
        // 3 30  -> 330 / 3 38 -> 383
        if (b[2] > b[1]) return b - a;
        return a - b;
      }
      if (!b[2]) {
        // 30 3 -> 330
        if (a[2] > a[1]) return b - a;
        return a - b;
      }
      return b[2] - a[2];
    }
    return b[3] - a[3];
  });

  if (numbers[0] === '0') return '0';

  return numbers.join('');
}

// 다른 사람 풀이
// function solution(numbers) {
//   var answer = numbers
//     .map((v) => v + '')
//     .sort((a, b) => (b + a) * 1 - (a + b) * 1)
//     .join('');

//   return answer[0] === '0' ? '0' : answer;
// }
