# Given a binary array, find the maximum number of consecutive 1's in the array.
# Brute force is keeping a counter and resetting when it's not 1. This is O(n) though which might time out.
class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        maxOnes = 0
        currentOnes = 0

        for i in range(len(nums)):
            if nums[i] == 1:
                currentOnes += 1
                maxOnes = max(maxOnes, currentOnes)
            else:
                currentOnes = 0

        return maxOnes
