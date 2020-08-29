# Given a matrix of m x n elements, return all elements of the matrix in spiral order.
# The problem here is to be able to detect a hard edge or one you have already visited. Then you need to know which direction to move in if you detect it.
# Approach that hard codes the initial direction of the spiral and uses 4 pointers.
class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        # edge case
        if not matrix:
            return []

        result = []

        rowStart = 0
        rowEnd = len(matrix) - 1
        colStart = 0
        colEnd = len(matrix[0]) - 1

        # very literal approach by using 4 pointers
        while rowStart <= rowEnd and colStart <= colEnd:
            # traverse right
            for j in range(colStart, colEnd + 1):
                result.append(matrix[rowStart][j])
            rowStart += 1

            # traverse down
            for i in range(rowStart, rowEnd + 1):
                result.append(matrix[i][colEnd])
            colEnd -= 1

            # you check this condition to prevent extra check at end
            if rowStart <= rowEnd:
                for j in range(colEnd, colStart - 1, -1):
                    result.append(matrix[rowEnd][j])
            rowEnd -= 1

            # prevent extra check
            if colStart <= colEnd:
                for i in range(rowEnd, rowStart - 1, -1):
                    result.append(matrix[i][colStart])
            colStart += 1

        return result
