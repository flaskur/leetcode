/**
 * Given a binary search tree, write a function to find the kth smallest element in it, where k is always valid and 1 <= k <= # Total Elements.
 * Okay, so I think the most obvious approach here is to create an array of all the nodes by doing a DFS or BFS search, then using a merge sort. Then the kth element should align with the index + 1. That seems like a cheap way to solve it though. Brute force it first.
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function(root, k) {
	// Edge case...
	if (root === null) return null;

	// Since we are talking about a binary search tree, wouldn't an inorder left, middle, right policy also give us the sort version? Yes, so we don't have to perform a sort function like with bfs, preorder, or postorder.

	let result = [];
	let arr = [];

	let current = root;

	// Why does this work? It continues to iterate until both the arr is 0 and the current is null, which is what the or logic means. Both have to fail for the iterations to end. The first while loop checks current and continues to add the left child until it becomes null from leaf node. The arr is then populated from root going all the way left. We take the leaf node and set as current, then add the value to the results array. Current is then set to the right node of the current if it exists. Say it does exist, we push all the left nodes of that branch too. Wow, so this is actually a really intuitive solution. It's hard to understand at first glance though. The outside while condition for arr length is necessary because want to make current equal null to populate the results array. Cool.
	while (current !== null || arr.length !== 0) {
		while (current !== null) {
			arr.push(current);
			current = current.left;
		}
		current = arr.pop();
		result.push(current.val);
		current = current.right;
	}

	console.log(`the dfs inorder is ${result}`);

	// The kth element should be the index + 1 case. So if I want the 1st element it would be index 0.
	return result[k - 1];
};
// Okay that works. The logic behind this solution is to understand that the kth element of the bst is just done by traversing the tree and sorting. The DFS for inorder does both since we just need to access the particular index from k.
