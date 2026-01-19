function solution(nums) {
  if (!nums || nums.length === 0) return 0;
  nums.sort((a, b) => a - b);
  return nums[nums.length - 1] * nums[nums.length - 2];
}

console.log(solution([1, 2, 3, 4, 5]));