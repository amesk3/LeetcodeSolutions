//binary search
//https://www.youtube.com/watch?v=8_FivWxrSK0

var splitArray = function(nums, m) {
  let n = nums.length;
  let max = 0;
  let sum = 0;
  for (let j = 0; j < n; j++) {
    max = Math.max(max, nums[j]);
    sum += nums[j];
  }

  let lo = max;
  let hi = sum;

  while (lo < hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    let pieces = split(nums, mid);
    if (pieces > m) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return lo;

  function split(nums, largestSum) {
    let pieces = 1;
    let tmpSum = 0;

    for (let i = 0; i < n; i++) {
      if (tmpSum + nums[i] > largestSum) {
        tmpSum = nums[i];
        pieces++;
      } else {
        tmpSum += nums[i];
      }
    }
    return pieces;
  }
};
