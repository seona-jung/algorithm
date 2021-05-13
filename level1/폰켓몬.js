function solution(nums) {
  const setSize = new Set(nums).size;
  const halfOfArraySize = nums.length / 2;
  return setSize > halfOfArraySize ? halfOfArraySize : setSize;
}
