# Given an input string, reverse a string word by word.
# The traditional way to do this without helper methods is two pointers method and swapping start and end until start < end fails.
# Misconception, thought it was reverse words, not characters. Need to split into array by whitespace first, then same method.
class Solution:
    def reverseWords(self, s: str) -> str:
        # by default split removes duplicate whitespace
        words = list(s.split())
        # print(words)

        # python does this weirdly
        return ' '.join(words[::-1])
