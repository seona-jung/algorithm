function solution(info, query) {
  query = query.map((q) => q.split(' and '));
  query.forEach((a) => {
    const popped = a.pop();
    a.push(...popped.split(' '));
  });

  info = info.map((i) => i.split(' '));

  const check = (query, info, index) => {
    return query[index] === '-' || query[index] === info[index];
  };

  let counts = [];

  for (const q of query) {
    counts.push(0);
    for (const i of info) {
      if (!check(q, i, 0)) continue;
      if (!check(q, i, 1)) continue;
      if (!check(q, i, 2)) continue;
      if (!check(q, i, 3)) continue;
      if (Number(q[4]) <= Number(i[4])) counts[counts.length - 1]++;
    }
  }

  return counts;
}
