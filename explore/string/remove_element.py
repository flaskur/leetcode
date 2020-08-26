# Given an array nums and value val, remove all instances of that value in place and return the new length.
# Brute force is linearly removing the val from the list, but bad time complexity. "Remove" really means putting at the end.
# Two pointers, one at front iterating, one at back for trash, swap on encounter because end pointer cannot point to the value itself.
class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        start, end = 0, len(nums) - 1

        # start <= end because last num could be val
        while start <= end:
            # the reason why there's no conflict if both start and end are value is because start index doesn't move of success, only end does
            if nums[start] == val:
                nums[start], nums[end] = nums[end], nums[start]
                end -= 1
            else:
                start += 1

        return start
