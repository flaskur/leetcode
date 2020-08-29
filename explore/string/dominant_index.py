# Given an integer array nums, there is exactly one largest element. Find if the largest element is at least twice as large as every other number. On failure return -1.
# You could use sum func on nums array, then sum func on removed max, then comparison.
class Solution:
    def dominantIndex(self, nums: List[int]) -> int:
        # empty edge case
        if not nums:
            return -1

        # single element edge case
        if len(nums) == 1:
            return 0

        # iterate and find the max value and index
        dom = max(nums)
        domIndex = nums.index(dom)

        # mutate and remove the max value to find next max
        nums.remove(dom)
        nextDom = max(nums)

        # condition check
        if dom >= nextDom * 2:
            return domIndex

        return -1  # failure
