function solution(price, money, count) {
  let sum = 0;
  for (let i = 1; i <= count; i++) {
    sum += price * i;
  }

  return sum - money > 0 ? sum - money : 0;

  // 다른 사람 풀이: 가우스 공식 이용
  // const tmp = price * (count * (count + 1) / 2) - money;
  // return tmp > 0 ? tmp : 0;
}
