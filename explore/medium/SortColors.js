/**
 * Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.
 * Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
 * I could just do a quick sort in this case. The important distinction is that it doesn't matter what number is actually in front or back, just that they are grouped together which is interesting. Can this instance mean that there's a shortcut?
 * You actually can't do a merge sort because it requires memory. The in place method is a quick sort which chooses a partition point and sorts from there.
 * 
 * @param {number[]} nums
 * @return {void}
 */
const sortColors = function(nums) {
	quickSort(nums, 0, nums.length - 1);
};

const quickSort = function(nums, start, end) {
	// Base case is when start >= end
	if (start >= end) return;
	else {
		let partitionIndex = partition(nums, start, end);

		// Continue to do this for the two halves since you know everything to the left is less and everything to the right is greater.
		quickSort(nums, start, partitionIndex - 1);
		quickSort(nums, partitionIndex + 1, end);
	}
};

const partition = function(nums, start, end) {
	let pivot = nums[end];
	let partitionIndex = start;

	// So the logic here is to basically have an i pointer and partition index both at the start. I want to find the particular index that I have to swap the pivot with. So if I encounter something that is less than the pivot, I should swap with partition index because I know that it should be in that side. Kinda confusing but really intuitive.
	// i is from start to end - 1 since pivot is end index.
	for (let i = start; i < end; i++) {
		if (nums[i] < pivot) {
			// Swap step with partitionIndex element.
			[ nums[i], nums[partitionIndex] ] = [ nums[partitionIndex], nums[i] ];
			partitionIndex += 1;
		}
	}

	// Swap pivot with partition index.
	[ nums[partitionIndex], nums[end] ] = [ nums[end], nums[partitionIndex] ];

	return partitionIndex;
};

/**
 * Discussion Solutions
 * 
 * You could make three variable counters for 0, 1, and 2 with a single pass, then pass over it again and overwrite the progressive index element.
 * 
 * The single pass solution is a little weird. It keeps track of index but starts at -1 for all of them. Really clever though.
 */
