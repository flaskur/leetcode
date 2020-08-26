# Given an array of 2n integers, group them into n pairs of integers which makes sum of min(a, b)
# One approach is sorting the array, and then just adding pairwise min since maximizes amount when the pair differs by little.
class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        nums.sort()  # probably merge or quick sort

        sum = 0

        # i goes to second last element and steps by 2 each iteration
        for i in range(0, len(nums) - 1, 2):
            sum += min(nums[i], nums[i + 1])

        return sum

# sum(sorted(nums)[::2])
