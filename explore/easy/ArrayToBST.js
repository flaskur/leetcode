/**
 * Given an array that is sorted in ascending order, convert it to a height balanced BST. Height refers to the number edges from a particular node to the deepest leaf. Probably means both subtrees have the same height. Given definition is a binary tree which the depth of the two subtrees of every node never differ by more than 1. Depth for the subtree refers to the number of edges to the root.
 * Possibly start in the middle and progressively move out.
 * 
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function(nums) {
	if (nums.length === 0) return null;

	let root = helper(nums, 0, nums.length - 1);
	return root;
};

const helper = function(nums, low, high) {
	if (low > high) return null;
	let mid = Math.floor((low + high) / 2);
	let node = new TreeNode();
	node.val = nums[mid];
	node.left = helper(nums, low, mid - 1);
	node.right = helper(nums, mid + 1, high);
	return node;
};

// Keeps track of the low and high index to check the array in place, similar to the partition sort in quicksort or binary search. Somewhat difficult to understand at. Basically you create a node on each recursive call, assign the value to the middle index in the sort array partition, then do a recursive call on the left and right children. This is an assignment approach too. The important thing to understand here is that we consistently find the mid point because we want any particular parent node to be greater than left and less than right.
