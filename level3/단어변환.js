function solution(begin, target, words) {
  const targetIndex = words.indexOf(target);
  if (targetIndex === -1) return 0;

  // 일단 "최소" + "경로"의 느낌이니깐 BFS!!!

  // queue에 [word, count]를 같이 넣는다.
  // 반복문을 돌면서 shift를 하고
  // isVisited도 관리한다.
  const queue = [];
  const enqueue = (word, count) => queue.push([word, count]);
  const isVisited = {};

  enqueue(begin, 0);

  while (queue.length) {
    const [currentWord, currentCount] = queue.shift();
    if (currentWord === target) return currentCount;
    isVisited[currentWord] = true;

    // words의 단어를 하나씩 검사한다.
    for (const word of words) {
      // 지금 나(currentWord)에서 딱 1개만 달라지는 애라면 OK!
      // 그리고 방문하지 않았다면 queue에 삽입!
      let different = 0;
      for (let i = 0; i < target.length; i++)
        if (currentWord[i] !== word[i]) different++;
      if (different === 1 && !(word in isVisited))
        enqueue(word, currentCount + 1);
    }
  }
  return 0;
}
