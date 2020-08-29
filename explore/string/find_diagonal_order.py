# Given an m x n matrix, return all elements in the matrix in diagonal order.
# Probably a pattern if you list it down. The pattern is that numbers in the same diagonal have the same sum row + column. Then you reverse the odd diagonals.
# Idea is to populate a dictionary with keys that represent the row + column sum.
class Solution:
    def findDiagonalOrder(self, matrix: List[List[int]]) -> List[int]:
        if not matrix:
            return []

        result = []  # return result
        d = {}

        # iterate through each element and add to dict based on row + col sum.
        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                # if dict doesn't already have the key, need to create empty list value then append
                if i+j not in d:
                    d[i+j] = [matrix[i][j]]
                else:
                    d[i+j].append(matrix[i][j])

        # iterate through each key sum and add to result, but reverse the even index keys
        for k in d.keys():
            # print('key is {} with list of {}'.format(k, d[k]))
            if k % 2 == 0:
                result.extend(d[k][::-1])
            else:
                result.extend(d[k])

        return result
