function solution(N, stages) {
  const failureRate = {};
  const result = Array(N)
    .fill()
    .map((_, i) => i + 1);
  // [...Array(N).keys()].map((i) => i + 1); 이것도 가능

  let moreThan = stages.filter((stage) => stage > N).length;
  for (let i = N; i >= 1; i--) {
    const on = stages.filter((stage) => stage === i).length;
    moreThan += on;
    failureRate[i] = on / moreThan;
  }

  result.sort((a, b) => failureRate[b] - failureRate[a]);
  return result;
}
