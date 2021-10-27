function solution(cacheSize, cities) {
  // 1. 캐시 크기만큼의 배열과 실행 시간을 더할 변수를 하나 만들어 놓는다.
  // 2-1. cache miss(indexOf로 검사) - 실행 시간에 +5를 하고, cache가 꽉 찼다면 shift()을 하고, push()한다.
  // 2-2. cache hit(indexOf로 검사) - 실행 시간에 +1을 하고, cache가 꽉 찼다면 splice(index, 1)을 하고, push()한다.

  // 너무 비효율적임! 순환 큐로 구하자!
  // rear를 가리키는 인덱스와 front를 가리키는 인덱스를 따로 둠 (modular 연산으로 구하기)
  // front는 데이터가 들어올 곳, rear는 데이터가 나가는 곳
  // 크기를 원래 크기보다 1 더 크게 설정하고, 0번째는 비워둔다.
  // ..? 이것도 안 될 것 같음.

  // => 다른 사람 풀이 보니 집합을 씀!
  // 자바스크립트의 집합은 해시테이블에 근간을 두고 있기 때문에 삽입과 삭제 모두 O(1)의 시간복잡도를 가짐.

  // if(cacheSize === 0) return cities.length * 5; // 이거 대신 push 뒤에서 >로 검사하면 됨.

  const cache = [];
  let time = 0;

  for (let i = 0; i < cities.length; i++) {
    const city = cities[i].toLowerCase();
    const index = cache.indexOf(city);
    // cache miss
    if (index === -1) {
      time += 5;
      cache.push(city);
      if (cache.length > cacheSize) cache.shift();
    }
    // cache hit
    else {
      time += 1;
      cache.push(city);
      cache.splice(index, 1);
    }
  }

  return time;
}

// * 다른 사람 풀이
// ! 집합의 add,delete는 O(1)이므로 집합을 이용한다.
// function solution(n, cities) {
//   let cache = new Set(),
//     answer = 0;
//   for (let i = 0; i < cities.length; i++) {
//     const city = cities[i].toUpperCase();
//     if (cache.has(city)) {
//       answer++;
//       cache.delete(city);
//       cache.add(city);
//     } else {
//       answer += 5;
//       cache.add(city);
//       if (n < cache.size) {
//         cache.delete(cache.values().next().value);
//       }
//     }
//   }

//   return answer;
// }
