function solution(jobs) {
  const swap = (idx1, idx2, arr) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  const getParentIdx = (idx) => Math.floor((idx - 1) / 2);

  function insert(item) {
    let curIdx = heap.length;
    heap[curIdx] = item;

    let parentIdx = getParentIdx(curIdx);
    while (curIdx > 0 && heap[parentIdx][1] > heap[curIdx][1]) {
      swap(parentIdx, curIdx, heap);
      curIdx = parentIdx;
      parentIdx = getParentIdx(curIdx);
    }
  }

  function removeRoot() {
    swap(0, heap.length - 1, heap);
    const popped = heap.pop();
    if (heap.length === 0) return popped;

    let curIdx;
    let minIdx = 0;
    while (curIdx !== minIdx) {
      curIdx = minIdx;
      let left = curIdx * 2 + 1;
      let right = curIdx * 2 + 2;
      if (left < heap.length && heap[left][1] < heap[minIdx][1]) {
        minIdx = left;
      }

      if (right < heap.length && heap[right][1] < heap[minIdx][1]) {
        minIdx = right;
      }

      swap(curIdx, minIdx, heap);
    }

    return popped;
  }

  // * jobs는 시작 시간순으로 정렬이 되어있지만 소요 시간순으로는 정렬이 안 되어 있으므로 정렬 수행
  jobs.sort((a, b) => {
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;

    if (a[1] > b[1]) return 1;
    else return -1;
  });
  // 0. 작업들의 요청부터 종료까지 걸린 시간의 합을 sum이란 변수에 저장, 현재 시간을 currentTime 변수에 저장
  // 1. sum에 jobs[0]의 작업 요청부터 종료까지 걸린 시간 추가, currentTime을 시작 시간 + 걸린 시간으로 update
  // 2. jobs(인덱스 1부터)를 돌면서 시작 시간이 currentTime보다 작거나 같은 애들을 heap에 insert한다.
  // 3. 2에 해당 하는 job들을 다 넣었다면 removeRoot를 하고 sum, currentTime을 update한다.
  // 4-1. 2-3의 과정을 하면서 heap이 비었는데 해야 할 job이 남아있다면 jobs의 다음 원소를 heap에 insert한 후 currentTime도 넣은 원소의 시작 시간으로 update하고 2-3의 과정 반복한다.
  // 4-2. 2-3의 과정을 하면서 job이 비었는데 heap에 원소가 남아있다면 removeRoot를 하고 sum, currentTime만 쭉 업데이트하고 return sum;
  // 5. heap도 비었고, jobs도 다 수행했다면 return

  let heap = [];

  let root = jobs[0];
  let currentTime = root[0] + root[1];
  let sum = root[1];

  let currentIdx = 1;
  while (true) {
    // 모든 job들을 다 돌았는데
    if (currentIdx >= jobs.length) {
      // heap에 아직 원소가 남아있다면 heap이 빌 때까지 계속 뽑아낸다.
      while (heap.length !== 0) {
        root = removeRoot();
        currentTime += root[1];
        sum += currentTime - root[0];
      }
      // 그리고 나서 return하면서 끝낸다.
      return Math.floor(sum / jobs.length);
    }

    // job들을 돌면서 시작 시간이 currentTime보다 작거나 같은 job들을 heap에 넣는다.
    while (currentIdx < jobs.length && jobs[currentIdx][0] <= currentTime) {
      insert(jobs[currentIdx]);
      currentIdx++;
    }

    // while문이 끝났으면 (job들을 다 돌았거나 다음 job의 시작 시간이 currentTime보다 크다면)
    // heap에 원소가 있을 때는 작업 하나를 빼서 수행한다. (sum, currentTime 업데이트)
    if (heap.length !== 0) {
      root = removeRoot();
      currentTime += root[1];
      sum += currentTime - root[0];
    }
    // heap에 원소가 없다면
    else {
      // 수행해야 할 job이 아직 남았다면 heap에 넣고 currentTime도 heap에 넣은 원소의 시작 시간으로 update하고  continue;
      if (currentIdx < jobs.length) {
        insert(jobs[currentIdx]);
        currentTime = jobs[currentIdx][0];
        currentIdx++;
        continue;
      }
      // 수행해야 할 job이 안 남았다면 바로 return;
      else {
        return Math.floor(sum / jobs.length);
      }
    }
  }
}
