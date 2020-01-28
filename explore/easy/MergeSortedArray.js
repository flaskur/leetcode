/**
 * Given two sorted arrays num1 and num2, merge them into one sorted array. The trick is that it must be done in place and that the num1 is given as arr.length - m for the actual elements where 0 fill in the rest. This implies that you should start the index from nums1.length - (nums1.length - m). Well, no because it's not sorted yet.
 * The normal approach is use a new array and populate it using 3 while loops and index i and j. The problem with that is if nums2 element appear before nums1, it will overwrite the rest. You could start from nums.length - (nums1.length - m) but then you should have to sort it again which defeats the purpose.
 * You could make a hash map and keep track of count for each number, then iterate through the count obj, but I'm not sure if that's automatically in order. To avoid automatic ordering you can use a space buffer on the key like ' ' + key or ana array of objects.
 * 
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} edit num1 in place.
 */
const merge = function(nums1, m, nums2, n) {
	let index = nums1.length - (nums1.length - m);
	let j = 0;
	for (index; index < nums1.length; index++, j++) {
		nums1[index] = nums2[j];
	}

	return nums1.sort((a, b) => a - b);
};

// Discussion version which works backwards and uses m and n.
const merge = function(nums1, m, nums2, n) {
	while (m > 0 && n > 0) {
		// Basically saying that if the last element in nums1 is greater than nums2, then place in the LAST index of the nums1 array. This avoids the overlapping issue when done in the progressive form.
		if (nums1[m - 1] >= nums2[n - 1]) {
			nums1[m + n - 1] = nums1[m - 1];
			m -= 1;
		} else {
			nums1[m + n - 1] = nums2[n - 1];
			n -= 1;
		}
	}

	// nums2 still has elements and they are all less then elements in nums1, place in front.
	while (n > 0) {
		nums1[n - 1] = nums2[n - 1];
		n -= 1;
	}
};

// This one uses a similar approach to the normal merge sort with while loops and keeping track of indices, but the thing you need to know is to work backwards to avoid the overlapping issue.
