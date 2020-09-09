# Given an array of integers, find if the array contains any duplicates.
# The easy way to do this is by converting the array into a set which doesn't allow duplicates and then comparing the length. Or you could do it formally and populate the set.
# Alternatively, you could make a count hash map or a boolean hash map, but this is not necessary.
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        hash_set = set(nums)

        return len(hash_set) != len(nums)
