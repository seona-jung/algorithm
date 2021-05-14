function solution(nums) {
  const isPrime = function (num) {
    if (num === 1) return false;
    if (num === 2) return true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (isPrime(nums[i] + nums[j] + nums[k])) count++;
      }
    }
  }
  return count;
}

// 같이 알고리즘 공부 스터디하는 친구가 푼 방법
// 아주 great.. 재귀를 암만 해도 이렇게 못해..ㅠㅠ

function solution(nums) {
  let primes = 0;

  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return n > 1;
  }

  function findPrime(i, sum, count) {
    if (count === 3) {
      if (isPrime(sum)) primes++;
      return;
    }
    if (i === nums.length) return;
    findPrime(i + 1, sum + nums[i], count + 1);
    findPrime(i + 1, sum, count);
  }

  findPrime(0, 0, 0);

  return primes;
}
