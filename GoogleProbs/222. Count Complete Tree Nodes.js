var countNodes = function(root) {
  if (!root) return 0;
  let nodes = 1;

  helper(root);

  function helper(root) {
    if (!root) return 0;

    if (root.left) {
      nodes++;
      helper(root.left);
    }

    if (root.right) {
      nodes++;
      helper(root.right);
    }
  }

  return nodes;
};
