// 내 풀이
function solution(priorities, location) {
  const size = priorities.length;
  let curIdx = 0; // front는 항상 빠져나갈 원소가 담겨있는 자리
  // let rear = size; // rear는 항상 다음에 새로운 원소가 들어올 자리
  // 지금 rear가 size인 이유는 따로 queue를 선언해서 넣어주는 작업 없이
  // 이미 생성이 완료된 queue인 priorities 자체를 사용하기 떄문에
  // => 여기선 원소가 더 들어올 일이 없는 꽉 찬 상태(Full)인 Queue임.

  // 새로 원소가 들어올 일은 없으니 enqueue()와 isFull()에 관한 건 구현하지 않는다.
  // 따라서 원래라면 순환 큐의 isEmpty()와 isFull() 둘 다 잘 수행하기 위해 더미 공간 1개가 필요하지만
  // 여기서는 만들지 않는다.

  // 사실 isEmpty도 필요 없고 rear도 필요 없다.
  // 순환 큐가 아니기에... front도 아니고 사실 curIdx가 적합하다.
  // 순환을 위한 모듈러 연산만 차용해왔을 뿐.
  // - 추후 반영해서 수정했음 -

  // const isEmpty = () => front === rear;
  const dequeue = () => {
    // if (isEmpty()) return;
    let tmp = curIdx;
    curIdx = (curIdx + 1) % size;
    return priorities[tmp];
  };

  const isPrinted = Array(size).fill(false);
  const sorted = priorities.slice().sort((a, b) => b - a);
  let count = 0;
  let max = sorted[count];

  while (true) {
    if (isPrinted[curIdx]) {
      curIdx = (curIdx + 1) % size;
      continue;
    }
    if (priorities[curIdx] === max) {
      max = sorted[++count];
      if (curIdx === location) return count;
      isPrinted[curIdx] = true;
    }
    dequeue();
  }
}
