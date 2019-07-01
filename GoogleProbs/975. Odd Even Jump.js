var oddEvenJumps = function(A) {
  let memo = new Map();

  const jump = (idx, num) => {
    let key = `i-${idx} n-${num}`;
    if (memo.has(key)) return memo.get(key);

    if (idx == A.length - 1) {
      return 1;
    }

    if (idx >= A.length) {
      return 0;
    }

    let res = 0;
    if (num % 2 == 0) {
      let largestValue = -Infinity,
        nextPosition = null;

      for (let i = idx + 1; i < A.length; i++) {
        if (A[idx] >= A[i]) {
          if (A[i] > largestValue) {
            nextPosition = i;
            largestValue = A[i];
          }
        }
      }

      if (nextPosition != null) {
        res += jump(nextPosition, num + 1);
      }
    } else {
      let smallestValue = Infinity,
        nextPosition = null;

      for (let i = idx + 1; i < A.length; i++) {
        if (A[idx] <= A[i]) {
          if (A[i] < smallestValue) {
            nextPosition = i;
            smallestValue = A[i];
          }
        }
      }

      if (nextPosition != null) {
        res += jump(nextPosition, num + 1);
      }
    }

    memo.set(key, res);
    return res;
  };

  let res = 0;

  for (let i = 0; i < A.length; i++) {
    res += jump(i, 1);
  }
  return res;
};
