# Given an array of nums, write a method that returns the pivot index. The pivot index is when the sum of left and right side are equal. Return -1 on failure.
# The pivot index cannot be first or last because sum doesn't exist on one side.
# You should probably keep a tally of left and right sum, then change based on iteration cycle.
# Actually, you are supposed to assume sum 0 on left right side.
class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        # empty list edge case
        if not nums:
            return -1

        # dumb assumption that sum is 0
        leftSum = 0
        rightSum = sum(nums) - nums[0]

        # condition check, then update, exclude last case because i+1 check
        for i in range(len(nums) - 1):
            if leftSum == rightSum:
                return i

            leftSum += nums[i]
            rightSum -= nums[i+1]  # this breaks

        # have to check if pivot is last index
        if leftSum == rightSum:
            return len(nums) - 1

        return -1  # failure
