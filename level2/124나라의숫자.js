function solution(n) {
  const loop = (quotient) => {
    while (quotient > 3) {
      if (quotient % 3 === 0) {
        result = 3 + result;
        quotient = parseInt(quotient / 3) - 1;
      } else {
        result = (quotient % 3) + result;
        quotient = parseInt(quotient / 3);
      }
    }
    return quotient;
  };

  let result = '';
  if (n % 3 === 0) {
    // 3의 배수일 때 (3으로 나눈 나머지가 0일 때)
    result += 3;
    let quotient = loop(parseInt(n / 3) - 1);
    result = quotient + result;
  } else {
    // 3의 배수가 아닐 때
    result += n % 3;
    let quotient = loop(parseInt(n / 3));
    result = quotient + result;
  }

  // 0번째가 0이라면 삭제하기, 모든 3을 4로 바꾸기
  result = result
    .split('')
    .map((num, i) => {
      if (i === 0 && num === '0') return '';
      if (num === '3') return '4';
      return num;
    })
    .join('');

  return result;
}

// 다른 사람 풀이 (1)
function solution(n) {
  return n === 0
    ? ''
    : solution(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
}

// 다른 사람 풀이 (2)
function solution(n) {
  const array1_2_4 = [4, 1, 2];
  let answer = '';

  while (n) {
    answer = array1_2_4[n % 3] + answer;
    n = Math.floor((n - 1) / 3);
  }

  return answer;
}
