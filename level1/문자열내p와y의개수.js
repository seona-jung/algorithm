function solution(s) {
  const newS = s.toLowerCase().split('');

  return (
    newS.filter((el) => el === 'p').length ===
    newS.filter((el) => el === 'y').length
  );
}
