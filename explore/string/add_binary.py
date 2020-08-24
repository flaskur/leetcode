# Given two binary strings, return their sum.
class Solution:
    def addBinary(self, a: str, b: str) -> str:
        carry = 0
        result = ''

        a = list(a)
        b = list(b)

        # iterate through each binary string until they ALL fail.
        while a or b or carry:
            if a:
                carry += int(a.pop())
            if b:
                carry += int(b.pop())

            # if a and b binary place is 2, then we expect 0 in that place, 1 otherwise
            result += str(carry % 2)
            carry //= 2  # floor division

        return result[::-1]  # start : end : step -> reverses the string
