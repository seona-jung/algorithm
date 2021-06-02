function solution(s) {
  return s
    .split(' ')
    .map((str) =>
      str
        .split('')
        .map((ch, index) =>
          index % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()
        )
        .join('')
    )
    .join(' ');
}
