function solution(s) {
  const result = [];
  const arr = [];

  const tmp = s.split(/[{}]/g).filter((v) => v.length && v !== ',');

  tmp.map((v, i) => (arr[i] = v.split(',')));

  arr.sort((a, b) => a.length - b.length);

  arr.forEach((outer) => {
    outer.forEach((cell) => {
      if (result.indexOf(cell * 1) === -1) {
        result.push(cell * 1);
        return;
      }
    });
  });

  return result;
}
