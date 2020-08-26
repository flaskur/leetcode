# Given an array of n positive integers and positive integer s, find the minimal length of a contiguous subarray of which sum >= s, return 0 otherwise.
# Could use a double loop until sum is exceeded with outer loop considering the start num, but will definitely time out.
# Two pointers method which tries to reach sum goal and then breaks removes from left pointer val until sum fails. Then move right pointer until sum succeeds again.
import math


class Solution:
    def minSubArrayLen(self, s: int, nums: List[int]) -> int:
        left, right = 0, 0
        sum = 0
        minLen = math.inf

        # iterate through entire arr with some window from left and right pointers
        while right < len(nums):
            sum += nums[right]
            right += 1

            # successfully found a sum range, mark minLen then try to break by removing left side
            while sum >= s:
                minLen = min(minLen, right - left)
                sum -= nums[left]
                left += 1

        # handle edge case
        if math.isinf(minLen):
            return 0

        return minLen

    # Brute Force -> Times Out
    # def minSubArrayLen(self, s: int, nums: List[int]) -> int:
    #     if not nums:
    #         return 0

    #     minLen = math.inf

    #     for i in range(len(nums)):
    #         currentSum = nums[i]
    #         currentLen = 1

    #         if currentSum >= s:
    #             return 1

    #         for j in range(i+1, len(nums)):
    #             currentSum += nums[j]
    #             currentLen += 1
    #             # print(j, nums[j], currentSum, currentLen)

    #             if currentSum >= s:
    #                 # print('breaks out')
    #                 break

    #         if currentSum >= s:
    #             minLen = min(minLen, currentLen)
    #             # print(minLen)

    #     if math.isinf(minLen):
    #         return 0

    #     return minLen
