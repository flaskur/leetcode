# Given an array of nums, write a function to move all the 0s to the end of it while maintaining the relative order of the other elements. Do it in place with O(1) space.
# Slow and fast runner? Slow runner will keep place while other one will iterate. Swap on nonzero encounters.
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        # slow runner keeps track of swap position
        slow = 0

        # fast runner encounters a nonzero and swaps with the slow runner value
        for i in range(len(nums)):
            if nums[i] != 0:
                nums[i], nums[slow] = nums[slow], nums[i]
                slow += 1
