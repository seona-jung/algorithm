function solution(number, k) {
  const stack = [];
  for (let i = 0; i < number.length; i++) {
    while (k > 0 && stack[stack.length - 1] < number[i]) {
      stack.pop();
      k--;
    }
    stack.push(number[i]);
  }

  stack.splice(stack.length - k, k);
  const answer = stack.join('');

  return answer;
}

//! 더 효율적인 코드 (이해 힘듦)
function solution(number, k) {
  let answer = '';
  const length = number.length;
  let totalLen = number.length - k;

  let index = -1;
  for (let i = 0; i < totalLen; i++) {
    let max = '0';
    for (let j = index + 1; j < length - (totalLen - i) + 1; j++) {
      if (max < number[j]) {
        max = number[j];
        index = j;
        if (max === '9') break;
      }
    }
    answer += max;
  }

  return answer;
}
