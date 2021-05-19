function solution(new_id) {
  //1 단계
  let id = new_id.toLowerCase().split('');

  // 2단계
  id = id.filter(
    (letter) =>
      (letter >= 'a' && letter <= 'z') ||
      (letter >= 0 && letter <= 9) ||
      letter === '-' ||
      letter === '_' ||
      letter === '.'
  );

  // 3단계
  for (let i = 0; i < id.length - 1; i++) {
    if (id[i] === '.' && id[i + 1] === '.') {
      id.splice(i + 1, 1);
      i--;
    }
  }

  // 4단계
  if (id[0] === '.') id = id.slice(1);
  console.log(id);
  if (id.slice(-1) === '.') id = id.slice(0, -1);
  console.log(id);

  // 5단계
  if (id.length === 0) id.push('a');

  // 6단계
  if (id.length >= 16) id = id.slice(0, 15);

  // 7단계
  if (id.length <= 2) {
    while (id.length < 3) {
      id.push(id.slice(-1));
    }
  }

  return id.join('');
}
