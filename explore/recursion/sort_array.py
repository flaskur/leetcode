# Given an array of integers nums, sort the array in ascending order. Let's try quick sort.
# Remember that the process is to find assume a pivot at the end, then using two pointers set all the nums less than pivot to left and then progressing pivot pointer.
# I'm assuming this mutates the regular array? The partition index is returned but the partition step actually changes the array in place.
class Solution:
	def sortArray(self, nums: List[int]) -> List[int]:
		# edge case
		if not nums:
			return None
		
		# Returns the partition index, but also mutates num placements
		def findPartitionIndex(nums: List[int], left: int, right: int) -> int:
			# assume pivot is end
			pivot = nums[right]

			# print(pivot)

			i = left # used to place nums less than pivot

			# iterate and mutate nums through swaps
			for j in range(left, right):
				if nums[j] < pivot:
					nums[j], nums[i] = nums[i], nums[j] # swap operation
					i += 1
			
			# place pivot in right place
			nums[right], nums[i] = nums[i], nums[right]

			# print('after', nums)

			return i # represents index where partition/pivot is


		def quickSort(nums: List[int], left: int, right: int) -> List[int]:
			# print(nums)
			
			if left >= right:
				return nums

			part_index = findPartitionIndex(nums, left, right)

			quickSort(nums, left, part_index - 1) # left half
			quickSort(nums, part_index + 1, right)

			return nums

		return quickSort(nums, 0, len(nums) - 1)