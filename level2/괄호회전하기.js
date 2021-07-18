function solution(s) {
  // 문자열의 길이가 홀수이면 return 0
  if (s.length % 2) return 0;

  // 여는 괄호, 닫는 괄호 개수 같은지 검사하는 함수
  // (짝끼리의 개수까지 검사하진 않음)
  const isPossible = (str) => {
    let openCount = 0;
    let closeCount = 0;
    for (const s of str) {
      if (/[[{(]/.test(s)) openCount++;
      else closeCount++;
    }
    return openCount === closeCount;
  };

  if (!isPossible(s)) return 0;

  const pair = { '[': ']', '{': '}', '(': ')' };
  const isValid = (str) => {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
      if (/[[{(]/.test(str[i])) stack.push(str[i]);
      else if (pair[stack.pop()] !== str[i]) return false;
    }
    return stack.length === 0;
  };

  s = [...s];
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (isValid(s)) count++;
    s.push(s.shift());
  }

  return count;
}
