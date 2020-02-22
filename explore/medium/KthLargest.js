/**
 * Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.
 * So I suppose that since it's the kth largest element, we should ignore duplicates when iterating. Or I could instead just make a set that removes the duplicates and then find the index from the sorted list of that. It should be in reverse order though so keep that in mind. Wait nevermind, you can't ignore duplicates. Just sort and then access from the back.
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function(nums, k) {
	// Really important distinction is that the sort method mutates and that you explicitly need to have a callback function or it will interpret it like a string instead of a number. So then 10 will be interpreted as less than 2 which isn't correct.
	nums.sort((a, b) => a - b);
	return nums[nums.length - k];
};

// This is somewhat of a naive approach and you can get more complicated with partition algorithms. I believe this is nlogn time with some memory which can definitely be improved upon.
