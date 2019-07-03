var totalFruit = function(tree) {
  //maximum adjacent items with no more than 2 different types

  let maxLongest = 0;

  for (let i = 0; i < tree.length; i++) {
    let ret = 0;
    ret = longest(tree, i);
    if (ret) break;
  }

  return maxLongest;

  function longest(tree, start) {
    let seen = [];
    let temp = 0;
    for (let j = start; j < tree.length; j++) {
      if (seen.indexOf(tree[j]) === -1) {
        seen.push(tree[j]);
      }
      if (seen.length <= 2) {
        temp++;
        if (j == tree.length - 1) {
          if (temp > maxLongest) {
            maxLongest = temp;
          }
          return 1;
        }
      } else {
        if (temp > maxLongest) {
          maxLongest = temp;
        }
        return 0;
      }
    }
  }
};
