/**
 * A peak element is an element that is greater than its neighbors. Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index. The array may contain multiple peaks, in that case return the index to any one of the peaks is fine. You may imagine that nums[-1] = nums[n] = -∞.
 * So the brute force approach to this is just to iterate though and check the i - 1 and i + 1 element and see if it's greater than both. If so we can immediately return. There's no point in finding all of them and storing into an array because finding the first is sufficient. The start is arbitrary. I imagine it's unsorted so at worst it could be O(n - 1) time with it being the second to last element. Exclude the first and last elements since they cannot be peaks.
 * 
 * @param {number[]} nums
 * @param {number}
 */
const findPeakElement = function(nums) {
	if (nums.length === 1) return 0;
	if (nums[0] > nums[1]) return 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) return i;
	}
	if (nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1;
	return -1;
};

// Just a basic linear search but with two edge cases. There's no point in doing a binary search since the array is not sorted.
