function solution(arr) {
  const min = Math.min(...arr);

  const filtered = arr.filter((num) => num !== min);

  return filtered.length !== 0 ? filtered : [-1];
}
