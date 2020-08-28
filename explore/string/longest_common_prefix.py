# Write a function to find the longest common prefix string amongst an array of strings
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        # empty array edge case
        if len(strs) == 0:
            return ''

        common = ''
        minLen = len(strs[0])

        # find the min length of all strings which is max length of common prefix
        for str in strs:
            minLen = min(minLen, len(str))

        # for each index place, assume the first char and check each other str in arr, failure will return common
        for i in range(minLen):
            char = strs[0][i]

            for str in strs:
                if str[i] != char:
                    return common

            common += char  # pass everything, add to common string

        return common  # if everything matches

# index, value in enumerate(str)
