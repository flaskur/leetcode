/**
   * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. To you are given a target value to search but you aren't given the pure sorted array. Instead you are given a modified version that rotates by some amount. Your goal is to find the index of the target but do it in O(logn) time which is basically a binary search.
   * The linear case is trivial since you can just iterate through them all until you find it.
   * 
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
const search = function(nums, target) {
	// Linear approach.
	// for (let i = 0; i < nums.length; i++) {
	// 	if (nums[i] === target) return i;
	// }
	// return -1;

	// Binary approach requires you to fix the rotated array somehow. Apparently by doing a binary comparison you can find the smallest element index.
	let start = 0;
	let end = nums.length - 1;
	while (start < end) {
		let mid = Math.floor((start + end) / 2);
		// Here's the kicker.
		if (nums[mid] > nums[end]) start = mid + 1;
		else end = mid;
	}
	console.log(`I expect the smallest value to be at index ${start}`);
	let rotation = start;
	start = 0;
	end = nums.length - 1;

	// Now do the normal binary search but with rotation accounted for. Subtract? Negative mod?
	while (start <= end) {
		let mid = Math.floor((start + end) / 2);
		let realMid = (mid + rotation) % nums.length;
		if (nums[realMid] === target) return realMid;
		else if (nums[realMid] < target) start = mid + 1;
		else if (nums[realMid] > target) end = mid - 1;
	}

	return -1;
};

// Some complications with this. The real middle is actually just pure addition of the rotation and then modulus instead of the other way through subtraction and modulus. Also I thought we would return the mid index for the original array which was wrong. When finding the smallest element index you set start to be mid + 1 and end to be exactly mid because start was for strictly greater. If they are equal, you still have to consider the actual mid value. Confusing.
