function solution(a, b) {
  // 7로 나눴을 때 나머지가 1이면 금요일
  const dayOfWeek = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
  const monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let sum = 0;
  monthDays.forEach((day, idx) => {
    if (idx >= a - 1) return;
    sum += day;
  });

  return dayOfWeek[(sum + b) % 7];
}
