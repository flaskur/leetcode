/**
 * Given two sorted integer arrays, merge into one sorted array. The first array as 0 filled spots for the second array integers.
 * 
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 */
const merge = function(nums1, m, nums2, n) {
	for (let i = m, j = 0; i < nums1.length; i++, j++) {
		nums1[i] = nums2[j];
	}
	return nums1.sort((a, b) => a - b);
};

// should probably do your own sort like merge or quick sort.
