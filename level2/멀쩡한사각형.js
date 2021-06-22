function solution(w, h) {
  if (w === h) return w * h - w;

  // 기울기가 항상 1보다 작은 직선을 가정한다.
  if (w < h) [w, h] = [h, w];

  let count = 1;

  const gradient = h / w;
  for (let i = 0; i < w - 1; i++) {
    count += Math.ceil(gradient * (i + 1)) - Math.floor(gradient * i);
  }

  return w * h - count;
}
