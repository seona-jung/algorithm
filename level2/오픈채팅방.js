function solution(record) {
  const obj = {};
  record.forEach((r) => {
    const tmp = r.split(' ');
    if (tmp[2]) obj[tmp[1]] = tmp[2];
  });

  const result = [];
  record.forEach((r) => {
    const tmp = r.split(' ');
    if (tmp[0] === 'Enter') {
      result.push(`${obj[tmp[1]]}님이 들어왔습니다.`);
    } else if (tmp[0] === 'Leave') {
      result.push(`${obj[tmp[1]]}님이 나갔습니다.`);
    }
  });
  return result;
}
