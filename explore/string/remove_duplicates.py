# Given a sorted array of nums, remove duplicates in place such that elements only appear once, returning the new length
# I would iterate through the array and if I encounter a duplicate element, remove and repeat index check. Detect duplicate by comparing current and next index.
# I could iterate through and build a hash map for the elements and then use that for detection instead of index comparison, but since it's already sort, I don't have to.
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        i = 0
        j = len(nums) - 1

        # don't check last one because we are removing based on next index
        while i < j:
            # remove element and don't increment i to repeat iteration but decrement j to move right bound
            if nums[i] == nums[i+1]:
                nums[:] = nums[:i+1] + nums[i+2:]
                j -= 1
            # no duplicate, move on
            else:
                i += 1

        return len(nums)

# Traditionally, loop condition for array.length is checked on each iteration, convenient but may not be performant. Range might work differently for python.
