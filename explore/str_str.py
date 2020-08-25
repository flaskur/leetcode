# Return the index of the first occurence of needle in haystack, or -1 is needle not found.
# One approach would be to iterate through each haystack character until it starts to match the first needle char, then continue to match the haystack substring with the needle until success or failure, but that means on first encounter we need to stop checking the outer loop.
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        # edge case
        if needle == '':
            return 0

        # range + 1 because the substring must be at least that length, so you don't have to check the indices that are already shorter than the needle char amount
        for i in range(len(haystack) - len(needle) + 1):
            # at this point, compare the substrings
            for j in range(len(needle)):
                if haystack[i + j] != needle[j]:
                    break

                # on last index, if it passed the break condition, must be a match
                if j == len(needle) - 1:
                    return i

        return -1  # failure on all cases
