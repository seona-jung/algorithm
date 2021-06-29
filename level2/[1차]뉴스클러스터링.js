function solution(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  let mom = 0;
  let son = 0;

  const wasChecked = {};

  const substr1 = [];
  const substr2 = [];

  for (let i = 0; i < str1.length - 1; i++) {
    if (/[a-z]/.test(str1[i]) && /[a-z]/.test(str1[i + 1]))
      substr1.push(str1.slice(i, i + 2));
  }
  for (let i = 0; i < str2.length - 1; i++) {
    if (/[a-z]/.test(str2[i]) && /[a-z]/.test(str2[i + 1]))
      substr2.push(str2.slice(i, i + 2));
  }

  if (substr1.length === 0 && substr2.length === 0) return 65536;

  for (let i = 0; i < substr1.length; i++) {
    if (!(substr1[i] in wasChecked)) {
      wasChecked[substr1[i]] = true;

      let count1 = 1;
      let count2 = 0;

      for (let j = i + 1; j < substr1.length; j++) {
        if (substr1[i] === substr1[j]) count1++;
      }

      count2 = substr2.filter((c) => c === substr1[i]).length;

      son += Math.min(count1, count2);
      mom += Math.max(count1, count2);
    }
  }

  for (const s of substr2) {
    if (!(s in wasChecked)) {
      mom++;
    }
  }
  return Math.floor((son / mom) * 65536);
}
