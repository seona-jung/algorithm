function solution(array, commands) {
  const answer = [];
  const sliceAndPick = function (start, end, index) {
    answer.push(array.slice(start - 1, end).sort((a, b) => a - b)[index - 1]);
  };
  commands.forEach((arr) => sliceAndPick(...arr));
  return answer;
}
