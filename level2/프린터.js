// 선아

// 더 수정할 예정
// 왜 인덱스 0번째는 계속 검사 안 하는지 로직 확인하고 설명 쓰기

function solution(priorities, location) {
  // 1. 우선순위가 담겨 있는 배열을 정렬한 배열(sorted)을 하나 새로 만든다.
  // 2. 지금 검사하고 있는 문서의 index를 가리킬 pointer 변수를 하나 만든다.
  // 3. 즉, 순환 큐(Circular Queue)를 구현한다.
  // 순환 큐는 원소들을 옮기지 않고 반대로 전단과 후단의 위치를 유연하게 옮기는 방식이다.
  // 4. 순환 큐를 돌면서 front(뽑아 낼 부분)를 검사하고 sorted[0]과 같으면 출력하고, rear(붙일 부분)쪽에 다시 넣는다.

  // 4.의 구현(front, rear의 변경)이 순환 큐의 관건이다.

  // 내림차순 배열
  const sorted = priorities.slice().sort((a, b) => b - a);
  priorities = priorities.map((p, i) => [p, i]);

  // push 혹은 shift를 하지 않는다. front, rear를 제어할 뿐이다.
  // 순환 큐는 한 자리(맨 처음 자리)를 쓰지 않는다. isFull의 검사를 위해

  const size = sorted.length + 1;
  let front = size;
  let rear = size;

  const isEmpty = () => front === rear;

  const isFull = () => (rear + 1) % size === front;
  // rear를 하나 증가시키고 데이터를 넣으려 보니까 그 자리에는 front라는 것이 자리 잡고 있는 것이다.
  // 여기서 중요한 사실은 큐에서 1개는 사실 쓸 수 없다는 것이다.
  // rear + 1 자리에 front가 있는지 알아보기 위해서이다.

  const enqueue = (data) => {
    // 우선 큐가 꽉 차있는지 본다. 여기서는 사실 필요 없다.
    if (isFull()) return;
    rear = (rear + 1) % size;
    queue[rear] = data;
  };

  const dequeue = () => {
    if (isEmpty()) return;
    front = (front + 1) % size;
    return queue[front];
  };

  const queue = [0];
  for (const p of priorities) {
    enqueue(p);
  }

  let count = 1;

  while (!isEmpty()) {
    const current = dequeue();
    if (sorted[0] === current[0]) {
      if (current[1] === location) {
        return count;
      }
      sorted.shift();
      count++;
    } else {
      enqueue(current);
    }
  }
}
