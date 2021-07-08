/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func sortedArrayToBST(nums []int) *TreeNode {
	// idea for this is to use binary search for mid for every child, to make it equal in height, so use helper with start and end pointers
	// base case should be when start > end, return nothing
	return helper(nums, 0, len(nums)-1)
}

func helper(nums []int, start int, end int) *TreeNode {
	// base case
	if start > end {
		return nil // nil to set leaves
	}

	// find the node candidate using mid point binary
	mid := (start + end) / 2
	node := TreeNode{
		Val: nums[mid],
	}

	// recursively find left and right child
	node.Left = helper(nums, start, mid-1)
	node.Right = helper(nums, mid+1, end)

	// assign as left, right child from return helper
	return &node
}