function solution(brown, yellow) {
  // 가로가 세로랑 같거나 항상 기니까
  // 노란색 개수로 만들 수 있는 모양을 계산하는데
  // 정사각형이나 가로가 긴 직사각형만 계산한다.

  // 세로 * 가로
  // 세로 <= 가로일 때까지만 검사하기

  for (let col = 1; col <= yellow / col; col++) {
    // yellow 가로 계산
    const row = yellow / col;
    // brown 계산
    const tmpBrown = row * 2 + (col + 2) * 2;
    if (brown === tmpBrown) return [row + 2, col + 2];
  }
}
