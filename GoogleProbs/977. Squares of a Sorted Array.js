var sortedSquares = function(A) {
  return A.map(x => {
    return x * x;
  }).sort((a, b) => {
    return a - b;
  });
};

//Our strategy is to iterate over the negative part in reverse, and the positive part in the forward direction

//Another two pointer method
var sortedSquares = function(A) {
  let result = [];
  let l = 0;
  let r = A.length - 1;
  let p = r;

  while (l <= r) {
    if (A[l] ** 2 > A[r] ** 2) {
      result[p--] = A[l++] ** 2;
    } else {
      result[p--] = A[r--] ** 2;
    }
  }

  return result;
};
