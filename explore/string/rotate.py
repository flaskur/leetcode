# Given an array, rotate the array to the right by k steps, where k is non-negative.
# One way is to make a list and fill with zeros, then iterate through the original array and insert into the correct index.
# You should take k mod len(nums) and then concatenate two parts of the array instead.
# In the example, k is 3 and the result is nums[4:] + nums[:4] so perhaps the trick is len(nums) - k mod len(nums)?
class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        offset = len(nums) - k % len(nums)
        # print(offset, nums[offset:], nums[:offset], nums[offset:] + nums[:offset])

        # must be nums[:] = not nums =, because we only want to change the values, not the original reference array.
        nums[:] = nums[offset:] + nums[:offset]
