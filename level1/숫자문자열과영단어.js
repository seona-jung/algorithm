function solution(s) {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[0-9]/)) {
      result += s[i];
      continue;
    }
    if (s[i].startsWith('z')) {
      result += 0;
      i += 3;
      continue;
    }
    if (s[i].startsWith('o')) {
      result += 1;
      i += 2;
      continue;
    }
    if (s[i].startsWith('t')) {
      if (s[i + 1] === 'w') {
        result += 2;
        i += 2;
        continue;
      }
      if (s[i + 1] === 'h') {
        result += 3;
        i += 4;
        continue;
      }
    }
    if (s[i].startsWith('f')) {
      if (s[i + 1] === 'o') {
        result += 4;
        i += 3;
        continue;
      }
      if (s[i + 1] === 'i') {
        result += 5;
        i += 3;
        continue;
      }
    }
    if (s[i].startsWith('s')) {
      if (s[i + 1] === 'i') {
        result += 6;
        i += 2;
        continue;
      }
      if (s[i + 1] === 'e') {
        result += 7;
        i += 4;
        continue;
      }
    }
    if (s[i].startsWith('e')) {
      result += 8;
      i += 4;
      continue;
    }
    if (s[i].startsWith('n')) {
      result += 9;
      i += 3;
      continue;
    }
  }
  return Number(result);

  // 다른 사람 풀이 1
  //     const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  //     let answer = s;

  //     for(let i=0; i< numbers.length; i++) {
  //         const arr = answer.split(numbers[i]);
  //         answer = arr.join(i);
  //     }

  //     return Number(answer);

  // 다른 사람 풀이 2
  // s = s.replace(/zero/gi, 0)
  // .replace(/one/gi, 1)
  // .replace(/two/gi, 2)
  // .replace(/three/gi, 3)
  // .replace(/four/gi, 4)
  // .replace(/five/gi, 5)
  // .replace(/six/gi, 6)
  // .replace(/seven/gi, 7)
  // .replace(/eight/gi, 8)
  // .replace(/nine/gi, 9)
  // return parseInt(s);
}
