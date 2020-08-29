# Given a non-empty array of digits, increment one to the integer. Return the plus one list.
# This is carry problem and you don't have to handle overflow.
class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        result = []
        carry = 1

        # build result by adding digits and carry
        while digits or carry:
            # only carry exists, break and return after
            if not digits:
                result.append(carry)
                break
            # no carry means just copy rest of digits
            elif not carry:
                result.append(digits[-1])
                digits.pop()
            # check for carry overflow
            else:
                if digits[-1] + carry == 10:
                    result.append(0)
                    carry = 1
                else:
                    result.append(digits[-1] + carry)
                    carry = 0

                digits.pop()
                # print(result, digits, carry)

        # reverse the order because we computed started from the ones place
        return result[::-1]
