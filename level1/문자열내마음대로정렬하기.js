function solution(strings, n) {
  const mySort = (a, b) => {
    if (a[n] < b[n]) return -1;
    else if (a[n] > b[n]) return 1;
    else {
      if (a <= b) return -1;
      else return 1;
    }
  };

  return strings.sort((a, b) => mySort(a, b));
}
