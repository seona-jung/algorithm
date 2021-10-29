function solution(skill, skill_trees) {
  let answer = 0;

  loop1: for (const skill_tree of skill_trees) {
    const idxArray = [...skill].map((ch) => {
      const idx = skill_tree.indexOf(ch);
      return idx === -1 ? ' ' : idx;
    });

    // 오름차순이 맞으면 ok
    // 뒷쪽에 -1이 있는 건 상관없음

    const newArray = idxArray.join('').trimEnd();

    for (let i = 0; i < newArray.length - 1; i++) {
      if (newArray[i] === ' ') continue loop1;
      if (newArray[i] > newArray[i + 1]) continue loop1;
    }
    answer++;
  }

  return answer;
}

// * 다른 사람 풀이
// ! filter를 이용하라.
// skill(shift로 제어)과 skill_tree(for문 index로 점검)를 동시에 검사하라.
// ! skill_tree의 글자를 하나하나 검사하며 skill에 있는 글자라면
// ! skill을 queue로 가정했을 때 항상 front에 있는 글자와 동일해야 한다.

// function solution(skill, skill_trees) {
//     function isCorrect(n) {
//         let test = skill.split('');
//         for (var i = 0; i < n.length; i++) {
//             if (!skill.includes(n[i])) continue;
//             if (n[i] === test.shift()) continue;
//             return false;
//         }
//         return true;
//     }

//     return skill_trees.filter(isCorrect).length;
// }
