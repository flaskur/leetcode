# Gjven a non-negative integer numRows, generate the first numRows of pascal's triangle.
# Handle the two edge cases of 1 and 2 rows, then general case by building during iteration.
class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        # edge cases
        if numRows == 0:
            return []
        if numRows == 1:
            return [[1]]
        if numRows == 2:
            return [[1], [1, 1]]

        # starting value
        result = [[1], [1, 1]]

        # iterate through each row and populate current based on index position
        for i in range(numRows - 2):
            current = []

            # append 1 on start and end index, otherwise append the upper 2 from previous current
            for j in range(i + 3):
                if j == 0 or j == i + 2:
                    current.append(1)
                else:
                    current.append(result[-1][j-1] + result[-1][j])

            # append the VALUES of current, NOT THE REFERENCE!!!
            # append(current) appends the reference which is cleared
            result.append(current[:])
            current.clear()  # careful about reference

        return result
