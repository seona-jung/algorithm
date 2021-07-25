function solution(numbers) {
  //? 십진수 -> 이진수: (num).toString(2)
  //? 이진수 -> 십진수: parseInt(str, 2);

  const result = [];

  for (const current of numbers) {
    let curBinary = current.toString(2);
    let next = current + 1;
    while (true) {
      const nextBinary = next.toString(2);

      // curBinary가 nextBinary보다 짧다면 길이 맞춰서 curBinary의 앞쪽에 0 삽입
      if (curBinary.length < nextBinary.length) curBinary = '0' + curBinary;

      let count = 0;
      let flag = false;
      for (let i = curBinary.length - 1; i >= 0; i--) {
        if (curBinary[i] !== nextBinary[i]) count++;
        if (count === 3) {
          flag = true;
          break;
        }
      }
      if (flag) {
        next++;
        continue;
      }
      if (count <= 2) {
        result.push(next);
        break;
      }
    }
  }

  return result;
}
