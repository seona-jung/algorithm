function solution(progresses, speeds) {
  const result = [];
  let count = 0;

  while (progresses.length > 0) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }

    if (progresses[0] >= 100) {
      result[count] = 0;
      while (progresses[0] >= 100) {
        progresses.shift();
        speeds.shift();
        result[count]++;
      }
      count++;
    }
  }

  return result;
}
