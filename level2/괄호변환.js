function solution(p) {
  // 올바른 괄호 문자열인지 검사하는 함수
  const isComplete = (str) => {
    const stack = [];
    for (const s of str) {
      if (s === '(') {
        stack.push(s);
      } else {
        if (stack.length) stack.pop();
        else return false;
      }
    }
    return !stack.length;
  };

  // 문자열을 돌면서 '('와 ')'의 개수가 같아지는 그 순간에 u는 거기까지.
  // v는 나머지 파트이다.
  const recursion = (p) => {
    // 입력이 빈 문자열인 경우, 빈 문자열 반환
    if (!p.length) return p;

    const count = {
      '(': 0,
      ')': 0,
    };

    let u, v;
    for (let i = 0; i < p.length; i++) {
      count[p[i]]++;
      if (count['('] === count[')']) {
        u = p.slice(0, i + 1);
        v = p.slice(i + 1);
        break;
      }
    }

    if (isComplete(u)) {
      // u가 올바른 괄호 문자열이라면
      return u + recursion(v);
    } else {
      // u가 올바른 괄호 문자열이 아니라면
      return (
        '(' +
        recursion(v) +
        ')' +
        u
          .slice(1, u.length - 1)
          .split('')
          .map((b) => {
            if (b === '(') return ')';
            else return '(';
          })
          .join('')
      );
    }
  };

  return recursion(p);
}
