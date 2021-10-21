function solution(n, words) {
  let prevWord = words[0];
  const spokeWords = {};
  spokeWords[prevWord] = true;

  for (let i = 1; i < words.length; i++) {
    if (prevWord.slice(-1) !== words[i][0] || spokeWords[words[i]]) {
      return [(i % n) + 1, parseInt(i / n + 1)];
    }
    prevWord = words[i];
    spokeWords[words[i]] = true;
  }

  return [0, 0];
}
