function solution(numbers) {
  numbers.sort((a, b) => a - b);

  let result = 0;
  for (let i = 0, j = 0; j < 10; i++, j++) {
    if (numbers[i] !== j) {
      result += j;
      i--;
    }
  }

  return result;

  // 다른 사람 풀이
  //  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
