# Given a non-empty array of integers, every element appears twice except one, find the single one.
# You could populate a count hash map and check the one with 1 count at the end. You could use a set and if it already appears in the set, you remove it since every element appears once.
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        hash_set = set([])

        # since each element appears twice except one element, iterating through entire array should leave only the one element left in set.
        for num in nums:
            if num in hash_set:
                # this actually makes it O(n^2) so it's better to use a hash map for this problem
                hash_set.remove(num)
            else:
                hash_set.add(num)

        # you could convert to list to access by index, or remove then add back
        return hash_set.pop()
