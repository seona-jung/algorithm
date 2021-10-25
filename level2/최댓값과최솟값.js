function solution(s) {
  const numArray = s.split(' ');
  return `${Math.min(...numArray)} ${Math.max(...numArray)}`;
}
