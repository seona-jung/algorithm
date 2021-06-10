function solution(arr1, arr2) {
  //   const arr = [];
  //   for (let i = 0; i < arr1.length; i++) {
  //     arr.push([]);
  //   }
  //   for (let i = 0; i < arr1.length; i++) {
  //     for (let j = 0; j < arr1[i].length; j++) {
  //       arr[i].push(arr1[i][j] + arr2[i][j]);
  //     }
  //   }
  //   return arr;

  // 처음에 아래처럼 했다가 새로운 배열 만들어서 해주고 싶어서.. 해봤으나 배열 생성부터 헷갈렸다.

  return arr1.map((el1, idx1) =>
    el1.map((el2, idx2) => el2 + arr2[idx1][idx2])
  );
}
