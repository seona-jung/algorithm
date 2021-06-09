function solution(x) {
  return (
    x %
      String(x)
        .split('')
        .reduce((acc, cur) => +acc + +cur) ===
    0
  );
}
