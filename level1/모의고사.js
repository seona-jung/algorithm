function solution(answers) {
  const user1 = [1, 2, 3, 4, 5];
  const user2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const user3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const user1Length = user1.length;
  const user2Length = user2.length;
  const user3Length = user3.length;

  let user1Count = 0;
  let user2Count = 0;
  let user3Count = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === user1[i % user1Length]) {
      user1Count++;
    }
    if (answers[i] === user2[i % user2Length]) {
      user2Count++;
    }
    if (answers[i] === user3[i % user3Length]) {
      user3Count++;
    }
  }

  const answer = [];
  const maxCount = Math.max(user1Count, user2Count, user3Count);
  if (maxCount === user1Count) answer.push(1);
  if (maxCount === user2Count) answer.push(2);
  if (maxCount === user3Count) answer.push(3);

  return answer;
}

// 1, 2, 3, 4, 5
// 2, 1, 2, 3, 2, 4, 2, 5
// 3, 3, 1, 1, 2, 2, 4, 4, 5, 5
