//! 자바스크립트에서 안전하게 저장할 수 있는 최대 정수 범위는 Number.MAX_SAFE_INTEGER(2^53 - 1)이다.
//! 그러므로 중간에 수가 너무 커져서 에러가 나지 않게
//! (A + B) % C = (A % B + B % C) % C 라는
//! 모듈러 연산의 성질을 이용해야 한다.

//? 1번 풀이
// function solution(n) {
//     const backup = [];

//     const fibonacci = (n) => {
//         if(n === 0 || n === 1) return n;
//         if(backup[n]) return backup[n];
//         backup[n] = fibonacci(n-2)+ fibonacci(n-1);
//         return backup[n];
//     };

//     return fibonacci(n);
// }

//! 하지만 1번 풀이 역시 런타임 에러가 발생했다.
//! 자바스크립트 엔진은 최대 재귀 깊이를 제한하고, 10,000개 정도까진 확실히 허용하고, 엔진에 따라 더 많은 깊이를 허용하기도 한다고 한다.
//! 그렇기 때문에 반복문이 아닌 재귀로 풀면 최대 재귀 깊이를 넘어서면서 런타임 에러가 발생했던 것이다.

//? 2번 풀이
// function solution(n) {
//     const backup = [0, 1];

//     for(let i=2; i<=n; i++) {
//         backup[i] = backup[i-2] % 1234567 + backup[i-1] % 1234567;
//     }

//     return backup[n] % 1234567;
// }

//! 3번 풀이는 다른 사람 풀이를 약간 수정한 것인데, 메모이제이션용으로 배열을 사용하지 않고, 단순 변수를 이용함으로써 저장 공간을 아낄 수 있고, 더 빠른 것으로 보인다.

//? 3번 풀이
function solution(n) {
  let a = 0,
    b = 1,
    f = 1;
  for (let i = 2; i <= n; i++) {
    f = a + b;
    a = b % 1234567;
    b = f % 1234567;
  }
  return f % 1234567;
}
