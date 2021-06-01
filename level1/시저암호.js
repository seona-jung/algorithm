function solution(s, n) {
  const lower = 'abcdefghijklmnopqrstuvwxyz'; // 26개
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return s
    .split('')
    .map((ch) => {
      if (lower.includes(ch)) return lower[(lower.indexOf(ch) + n) % 26];
      else if (upper.includes(ch)) return upper[(upper.indexOf(ch) + n) % 26];
      else return ch;
    })
    .join('');
}
