/**
 * Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value. Your algorithm's runtime complexity must be in the order of O(log n). If the target is not found in the array, return [-1, -1].
 * Being given a sorted array is really good. So the return wants the starting and ending index for when the target bounds fail. So for this, I would do a binary search until we find the target index. Then linearly move from left and right to find the bounds. If we fail to even find the target, then just return the [-1, -1].
 * 
 * @param {number[]} nums
 * @param {number} target
 * @param {number[]}
 */
const searchRange = function(nums, target) {
	if (nums.length === 1 && nums[0] === target) return [ 0, 0 ];
	let found = -1;
	let i = 0;
	let j = nums.length - 1;
	while (i <= j) {
		let mid = Math.floor((i + j) / 2);
		if (nums[mid] === target) {
			found = mid;
			break;
		} else if (nums[mid] < target) i = mid + 1;
		else if (nums[mid] > target) j = mid - 1;
	}
	if (i > j) return [ -1, -1 ];
	let low = found;
	let high = found;
	while (nums[low] === target) {
		if (nums[low - 1] != target) break;
		low -= 1;
	}
	while (nums[high] === target) {
		if (nums[high + 1] != target) break;
		high += 1;
	}
	return [ low, high ];
};

// Search range is a binary search with a bit of an extension on both sides when and if we find the target. Needed some edge case handling.
