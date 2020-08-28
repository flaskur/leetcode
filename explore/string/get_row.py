# Given an integer rowIndex, return the rowIndexth row of the pascal's triangle.
# Seems difficult because I need the previous row to calculate the current one.
class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        # edge cases
        if rowIndex == 0:
            return [1]
        if rowIndex == 1:
            return [1, 1]

        previous = [1, 1]
        current = []

        for x in range(rowIndex - 1):
            # print('prev currently', previous)

            for i in range(x + 3):
                if i == 0 or i == x + 2:
                    current.append(1)
                else:
                    # print(i, previous)
                    current.append(previous[i-1] + previous[i])

            previous = current[:]
            # print('prev cur', previous, current)
            current.clear()
            # print(previous, current, 'cleared')

        return previous
