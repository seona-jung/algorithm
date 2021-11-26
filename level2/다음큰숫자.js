//! 처음 푼 방법 2진수로 변환하는 빌트인 메서드를 잘 모르겠어서 2진수를 구하면서 1의 개수를 세는 함수를 만들었다.
//! 그러면서 n+1부터 1씩 증가하면서 1의 개수를 구해서 가장 먼저 같은 1의 개수를 갖는 수를 찾았다.

//? 내 풀이
// function solution(n) {
//     const countOne = (n) => {
//         let count = 0;
//         while(n !== 0) {
//             if(n % 2 === 1) count++;
//             n = parseInt(n / 2);
//         }
//         return count;
//     }

//     const count = countOne(n);

//     for(let i=n+1; ; i++) {
//         if(countOne(i) === count) return i;
//     }
// }

//! 다른 사람 풀이를 보니 object 프로토타입 메서드인 toString(2)를 이용하면 2진수를 쉽게 구할 수 있다는 걸 알았다.
//! 그리고 다들 정규표현식을 자유자재로 사용해서 코드를 간단하게 줄이며 해결했다.
//! match(/1/g) 정도의 정규표현식은 쉬우니 나도 떠올릴 수 있도록 노력해야겠다.
//! 이 풀이에서 또 배울 점은 삼항 연산자를 통해 간편하게, 재귀를 통해 깔끔하게 코드를 작성했다는 점이다.

//? 다른 사람 풀이
function solution(n, a = n + 1) {
  return n.toString(2).match(/1/g).length === a.toString(2).match(/1/g).length
    ? a
    : solution(n, a + 1);
}
