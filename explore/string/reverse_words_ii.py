# Given a string, reverse the order of characters in each word while preserving the whitespace and word order.
# Same idea, to convert into an array and iterate through reversing each word. The default split will not work though because we need to preserve whitespace.
# Actually, they want only single whitespace, not preserving multiple, question worded strangely.
class Solution:
    def reverseWords(self, s: str) -> str:
        words = s.split()  # convert into arr ignoring multiple whitespace
        # print(words)

        # iterate through array and reverse each word
        for i in range(len(words)):
            words[i] = words[i][::-1]

        # join into string with single whitespace delimiter
        return ' '.join(words)
