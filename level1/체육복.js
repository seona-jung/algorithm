function solution(n, lost, reserve) {
  const newLost = [];
  const newReserve = [];

  for (const l of lost) {
    if (!reserve.includes(l)) {
      newLost.push(l);
    }
  }

  for (const r of reserve) {
    if (!lost.includes(r)) {
      newReserve.push(r);
    }
  }

  let answer = n - newLost.length;
  const alreadyChecked = [];
  newReserve.forEach((num) => {
    if (!alreadyChecked.includes(num - 1) && newLost.includes(num - 1)) {
      answer++;
      alreadyChecked.push(num - 1);
    } else if (!alreadyChecked.includes(num + 1) && newLost.includes(num + 1)) {
      answer++;
      alreadyChecked.push(num + 1);
    }
  });

  return answer;
}
