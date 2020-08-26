# Given a sorted array of integers, find two numbers such that they add up to a specific target number, return their index. Exactly one solution exists.
# This is two pointers method, moving the pointer based on target - current sum.
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        i = 0
        j = len(numbers) - 1

        # could do infinite loop since solution is guaranteed
        while (i < j):
            current = numbers[i] + numbers[j]

            # since sorted, move i pointer right if current too small, move j pointer left if current too big
            if current == target:
                return [i + 1, j + 1]  # not zero based, which is dumb
            elif current < target:
                i += 1
            elif current > target:
                j -= 1
