function solution(A, B) {
  // A에서는 최댓값만 뽑고, B에서는 최솟값만 뽑아 곱한다.
  // 정렬을 수행한 후 순서대로 곱해준다.

  let answer = 0;

  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }

  return answer;

  // return A.reduce((acc, cur, i) => acc + cur * B[i], 0);
}
