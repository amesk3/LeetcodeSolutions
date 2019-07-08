var sortArrayByParity = function(A) {
  let curr = 0;
  let next = curr + 1;

  while (curr < A.length && next < A.length) {
    if (A[curr] % 2 === 0) {
      curr++;
      next++;
    } else {
      if (next > A.length) return A;
      if (A[next] % 2 === 0) {
        //swap
        let tmp = A[next];
        A[next] = A[curr];
        A[curr] = tmp;
        curr++;
        next++;
      } else {
        next++;
      }
    }
  }
  return A;
};

//alternatively
var sortArrayByParity = function(A) {
  const temp = [];
  A.forEach(v => {
    v % 2 === 0 ? temp.unshift(v) : temp.push(v);
  });

  return temp;
};

//or

var sortArrayByParity = function(A) {
  return [...A.filter(v => v % 2 === 0), ...A.filter(v => v % 2 !== 0)];
};
