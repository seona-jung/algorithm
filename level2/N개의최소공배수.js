const GCD = (a, b) => (b % a ? GCD(b % a, a) : a);

const LCM = (a, b) => (a * b) / GCD(a, b);

function solution(arr) {
  return arr.reduce((acc, cur) => LCM(acc, cur));
}
