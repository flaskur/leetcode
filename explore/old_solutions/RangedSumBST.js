// We are given three variables called root, L, and R. 
// root seems like an object instance and LR are both number inputs.
// Yeah for sure the root is just an instance of a node.

// It's important to remember how trees works. Most of the time when you work with tree structures, you'll be creating a recursive function using that with each new node. The end stops are when the node objects are null, or in conditionals when the node children are null ie they are leafs. 

// We test the edge cases by checking null value for root.

let rangeSumBST = function(root, L, R) {
  // Need an empty array to push all the result inbetween L and R values.
  results = [];
  
  // If the root is null then the tree is empty so return null.
  if (root === null) return null;
  
  let traverseBST = function(node) {
    if (node === null) return;
    
    if (node.val >= L && node.val <= R) {
      results.push(node);
    }
    traverseBST(node.left);
    traverseBST(node.right);
  };
  
  // So we pass in the root which means the results array will contain all the nodes that have values between L and R inclusive.
  traverseBST(root);
  
  let sum = results.reduce(function(total, current) {
    return total += current.val;
  }, 0);
  
  return sum;
};