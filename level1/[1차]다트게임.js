function solution(dartResult) {
  let tmp;
  const arr = [];
  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= '0' && dartResult[i] <= '9') {
      if (tmp) arr.push(+tmp);
      tmp = dartResult[i];
      while (dartResult[i + 1] >= 0 && dartResult[i + 1] <= 9) {
        i++;
        tmp += dartResult[i];
      }
    } else {
      switch (dartResult[i]) {
        case 'D':
          tmp = Math.pow(tmp, 2);
          break;
        case 'T':
          tmp = Math.pow(tmp, 3);
          break;
        case '*':
          tmp *= 2;
          arr[arr.length - 1] *= 2;
          break;
        case '#':
          tmp *= -1;
          break;
      }
    }
  }
  arr.push(+tmp);
  return arr.reduce((acc, cur) => acc + cur);
}
