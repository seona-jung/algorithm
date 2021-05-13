function solution(lottos, win_nums) {
  const lowest = lottos.filter((num) => win_nums.includes(num)).length;
  const highest = lowest + lottos.filter((num) => num === 0).length;

  const getRank = function (score) {
    if (score <= 1) {
      return 6;
    } else {
      return 7 - score;
    }
  };

  return [getRank(highest), getRank(lowest)];
}
