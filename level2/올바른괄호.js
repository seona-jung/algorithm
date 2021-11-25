//! 스택을 이용하는 문제의 대표 유형이다.
//! 여는 괄호일 때는 스택에 넣고,
//! 닫는 괄호일 때는 스택에서 하나를 뺸다. 만약 스택이 비어 있다면 false!
//! 모든 문자를 다 검사했는데 스택이 비어있지 않다면 false!

//? 내 풀이
// function solution(s) {
//   const stack = [];

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === '(') {
//       stack.push('(');
//       continue;
//     }
//     if (!stack.length) return false;
//     stack.pop();
//   }
//   if (stack.length) return false;
//   return true;
// }

//! 소괄호만 쓰이므로 굳이 배열에 '('를 넣을 필요가 없다.
//! 즉, 배열을 사용할 필요가 없다.
//! 다른 사람 풀이를 보니 변수 하나를 둬서 여는 괄호일 시 +1, 닫는 괄호일 시 -1을 해주었다.
//! 그러면 그 변수는 항상 0 혹은 양수여야만 한다. 즉, 음수일 시 바로 종료한다.
//! 마지막에는 항상 0이어야 한다.

//? 다른 사람 풀이
function solution(s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    // 원래는 let paren of s 였으나 느려서 바꾸었다.
    sum += s[i] === '(' ? 1 : -1;
    if (sum < 0) {
      return false;
    }
  }
  return sum === 0 ? true : false;
}
