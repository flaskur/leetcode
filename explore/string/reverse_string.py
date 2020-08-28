# Reverse a string as an array of characters in place with two pointers method.
class Solution:
    def reverseString(self, s: List[str]) -> None:
        # two pointers to start and end index
        start = 0
        end = len(s) - 1

        # iterate until the start and end are equal or clash
        while (start < end):
            # temp = s[start]
            # s[start] = s[end]
            # s[end] = temp
            s[start], s[end] = s[end], s[start]

            start += 1
            end -= 1
