from typing import List

# Merge sort recursive
def merge_sort(nums: List[int]) -> List[int]:
	# base case
	if len(nums) == 1 or not nums:
		return nums
	
	mid = int(len(nums) / 2) # python floors but also converts it a float, which doesn't work for array slicing
	left_half = nums[:mid]
	right_half = nums[mid:] # on odd len, right is 1 more than left

	left = merge_sort(left_half)
	right = merge_sort(right_half)

	return merge(left, right)

# Populate nums array until one runs out, then fill with the rest of the empty one
def merge(left: List[int], right: List[int]) -> List[int]:
	nums = []

	i = 0
	j = 0
	while i < len(left) and j < len(right):
		if left[i] <= right[j]:
			nums.append(left[i])
			i += 1
		elif left[i] > right[j]:
			nums.append(right[j])
			j += 1

	# assumes that nums already filled with right array
	while i < len(left):
		nums.append(left[i])
		i += 1

	# assumes that nums already filled with left array
	while j < len(right):
		nums.append(right[j])
		j += 1

	# could have just concatenated using .extend or splat instead of above 2 while loops

	return nums

nums = [2,4,5,1,7,3,8,6]

print(merge_sort(nums))
print(merge_sort([]))