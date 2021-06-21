function solution(input) {
  const fullLen = input.length;
  const halfLen = parseInt(input.length / 2);

  const result = [];

  if (input.length <= 1) return input.length;

  for (let i = 1; i <= halfLen; i++) {
    let tmp = '';
    let count = 1;
    let s = 0;
    let m = i;
    let e = i * 2;
    while (s < fullLen) {
      if (input.slice(s, m) === input.slice(m, e)) {
        count++;
      } else {
        tmp += `${count !== 1 ? count : ''}${input.slice(s, m)}`;
        count = 1;
      }
      s = m;
      m = e;
      e = e + i;
      if (fullLen - s < i) {
        // 남은 길이가 i보다 짧다면
        // 뒤에 남은 거 다 붙이고 바로 break;
        tmp += input.slice(s);
        break;
      }
    }
    result.push(tmp.length);
  }

  return Math.min(...result);
}
