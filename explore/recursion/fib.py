# Given n index place, find that number in the fibonacci sequence recursively and expensively. 0 1 1 2 3 5 8 ...
class Solution:
	def fib(self, N: int) -> int:
		memo = {} # store expensive function results in hash map

		# base cases
		if N == 0:
			return 0
		if N <= 2:
			return 1

		# check if prev values already calculated
		if N - 1 in memo:
			return memo[N - 1] + memo[N - 2]

		# calculate fib for current n value, then update memo for future use
		result = self.fib(N - 1) + self.fib(N - 2)
		if N not in memo:
			memo[N] = result

		return result
			