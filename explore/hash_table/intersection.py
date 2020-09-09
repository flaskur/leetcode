# Given two arrays, write a function to compute their intersection.
# I think this problem means the values that exist in both arrays.
# I would make a hash map with integer key and boolean value. Iterate through both and populate a set on intersection.
class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        # edge case
        if not nums1 or not nums2:
            return []

        result_set = set([])
        hash_map = {}

        # iterate and populate the first array
        for num in nums1:
            if num not in hash_map:
                hash_map[num] = True

        # iterate through second array and populate result set
        for num in nums2:
            # probably better to say if num in hash_map
            if hash_map.get(num) != None:
                result_set.add(num)

        return result_set

# You could instead converted both arrays into sets and done a literal intersection.
# return set1 & set2
