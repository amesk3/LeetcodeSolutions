var rangeSumBST = function(root, L, R) {
  let total = 0;
  helper(root, L, R);
  return total;

  function helper(node, L, R) {
    if (!node) return;

    if (node.val >= L && node.val <= R) {
      total += node.val;
    }

    if (node.left) {
      helper(node.left, L, R);
    }

    if (node.right) {
      helper(node.right, L, R);
    }
  }
};
