function solution(places) {
  //     Q
  //    QQQ
  //   QQPQQ
  //    QQQ
  //     Q

  const check = (arr, [row, col]) => {
    // 바로 위, 아래, 왼쪽, 오른쪽은 바로 out
    if (arr[row - 1] && arr[row - 1][col] === 'P') return false;
    if (arr[row + 1] && arr[row + 1][col] === 'P') return false;
    if (arr[row][col - 1] === 'P') return false;
    if (arr[row][col + 1] === 'P') return false;

    // 한 칸 띄고 위, 아래, 왼쪽, 오른쪽은 사이 공간이 X일 땐 구제
    if (arr[row - 2] && arr[row - 2][col] === 'P' && arr[row - 1][col] !== 'X')
      return false;
    if (arr[row + 2] && arr[row + 2][col] === 'P' && arr[row + 1][col] !== 'X')
      return false;
    if (arr[row][col - 2] === 'P' && arr[row][col - 1] !== 'X') return false;
    if (arr[row][col + 2] === 'P' && arr[row][col + 1] !== 'X') return false;

    // 대각선 왼쪽 위, 왼쪽 아래, 오른쪽 위, 오른쪽 아래는 사이 공간 2개가 X일 땐 구제
    if (
      arr[row - 1] &&
      arr[row - 1][col - 1] === 'P' &&
      (arr[row - 1][col] !== 'X' || arr[row][col - 1] !== 'X')
    )
      return false;
    if (
      arr[row + 1] &&
      arr[row + 1][col - 1] === 'P' &&
      (arr[row + 1][col] !== 'X' || arr[row][col - 1] !== 'X')
    )
      return false;
    if (
      arr[row - 1] &&
      arr[row - 1][col + 1] === 'P' &&
      (arr[row - 1][col] !== 'X' || arr[row][col + 1] !== 'X')
    )
      return false;
    if (
      arr[row + 1] &&
      arr[row + 1][col + 1] === 'P' &&
      (arr[row + 1][col] !== 'X' || arr[row][col + 1] !== 'X')
    )
      return false;

    return true;
  };

  const result = [];
  for (const place of places) {
    const arr = Array(5)
      .fill()
      .map((_) => []);
    const saveP = [];
    for (let i = 0; i < 5; i++) {
      const line = [];
      for (let j = 0; j < 5; j++) {
        line.push(place[i][j]);
        if (place[i][j] === 'P') saveP.push([i, j]);
      }
      arr[i] = line;
    }

    // P 주위 검사
    let flag = true;
    for (const [row, col] of saveP) {
      if (!check(arr, [row, col])) {
        result.push(0);
        flag = false;
        break;
      }
    }

    if (flag) result.push(1);
  }

  return result;
}
