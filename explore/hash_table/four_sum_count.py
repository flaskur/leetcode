# Given four lists of a,b,c,d integer values, compute how many tuples there are such that the sum is 0.
# The brute force way to do this would be to use 4 for loops and iterate through every single element, but that would be really bad for performance.
# Idea is to split into two sets. First set will calculate sum of each pair and populate a count hash map where the keys are the sum. Then we iterate through the second set, sum that and if pair sum + map sum = 0, them increment result count.
class Solution:
	def fourSumCount(self, A: List[int], B: List[int], C: List[int], D: List[int]) -> int:
		# edge case
		if not A or not B or not C or not D:
			return 0

		result_count = 0

		# split sets and populate sum count map 
		sum_count_map = {}
		for i in range(len(A)):
			for j in range(len(B)):
				sum = A[i] + B[j]
				if sum not in sum_count_map:
					sum_count_map[sum] = 1
				else:
					sum_count_map[sum] += 1

		# iterate through second set and match pair
		for i in range(len(C)):
			for j in range(len(D)):
				sum = C[i] + D[j]
				if -sum in sum_count_map:
					result_count += sum_count_map[-sum]

		return result_count
