function solution(bridge_length, weight, truck_weights) {
  // 1. 다리 배열 -> Queue (bridge_length 크기만큼의 배열 bridge 새로 생성)
  // 2. 트럭 배열 -> Queue (truck_weights 이미 있음)
  // 3. bridge_weight가 weight를 넘지 않으면 dequeue() 한 트럭을 다리에 넣어준다.

  // bridge에 단 1대의 트럭도 없을 때까지 반복 => bridge 무게 합이 0이 아닐 때까지
  // 1초가 지날 때마다 트럭은 이동한다. => bridge의 무게를 빠져나간 트럭만큼 줄인다.

  const bridge = Array(bridge_length - 1).fill(0);
  bridge.push(truck_weights.shift());
  let bridge_weight = bridge.reduce((a, b) => a + b);
  let count = 1;

  while (bridge_weight) {
    // 1. 다리에서 트럭 이동시키면서 무게 업데이트
    bridge_weight -= bridge.shift();

    // 2. 새로운 트럭 다리에 올릴지 말지 검사 (무게)
    if (bridge_weight + truck_weights[0] <= weight) {
      // 2-1. 들어올 수 있으면 넣어주고, 다리 총 무게도 업데이트
      bridge.push(truck_weights.shift());
      bridge_weight += bridge[bridge_length - 1];
    } else {
      // 2-2. 아무 것도 안 들어왔어도 다리 길이 유지 위해 0 넣어준다.
      bridge.push(0);
    }
    count++;
  }

  return count;
}
