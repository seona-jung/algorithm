function solution(n, arr1, arr2) {
  function convertToBinary(decimal) {
    const binary = [];

    while (decimal > 0) {
      binary.push(decimal % 2);
      decimal = parseInt(decimal / 2);
    }

    while (binary.length !== n) {
      binary.push(0);
    }

    return binary.reverse();
  }

  arr1 = arr1.map((el) => convertToBinary(el));
  arr2 = arr2.map((el) => convertToBinary(el));

  const result = Array(n)
    .fill()
    .map(() => Array(n).fill());

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr1[i][j] === 0 && arr2[i][j] === 0) {
        result[i][j] = ' ';
      } else {
        result[i][j] = '#';
      }
    }
  }

  return result.map((el) => el.join(''));
}
