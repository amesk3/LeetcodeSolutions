var numJewelsInStones = function(J, S) {
  if ((J.length = 0 || !J)) return 0;

  let num = 0;

  for (let i = 0; i < S.length; i++) {
    if (J.includes(S[i])) {
      num++;
    }
  }

  return num;
};
