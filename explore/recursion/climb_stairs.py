# You climb stairs that take n steps to reach the top. You can climb either 1 or 2 steps. How many distinct ways to climb to the top?
# This is the dynamic programming problem which was the same as encode combinations.
# Well you know there is only 1 way to climb steps of 1. There are only two ways to climbs steps of 2. So each recursive step definitely increments the n starting at 0.
# You are suppose to consider both paths though, so when it becomes null, you add 1 because that is a single distinct path.
class Solution:
	def climbStairs(self, n: int) -> int:
		memo = {} # is this in scope of helper function?

		def helper(current_step: int, end_step: int) -> int:
			# print(current_step, end_step)
			# base case
			if current_step == end_step:
				return 1 # one distinct way is finished

			# there is only one step left
			if current_step + 1 == end_step:
				return helper(current_step + 1, end_step)

			# this might be overkill, not sure if some of these cases aren't used
			if current_step + 1 in memo and current_step + 2 in memo:
				return memo[current_step + 1] + memo[current_step + 2]
			elif current_step + 1 in memo:
				return memo[current_step + 1] + helper(current_step + 2, end_step)
			elif current_step + 2 in memo:
				return helper(current_step + 1, end_step) + memo[current_step + 2]

			# there are 2 or more steps left
			result = helper(current_step + 1, end_step) + helper(current_step + 2, end_step)


			if current_step not in memo:
				memo[current_step] = result

			return result

		return helper(0, n)

# it timed out because i repeat the operation of a specific step multiple times, so I need to memoize it.
# problem is that i don't think it will defined because i'm calling a helper