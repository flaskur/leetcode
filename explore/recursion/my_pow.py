# Implement power(x, n) which calculates x raised to the power of n recursively.
# So, x can be a float value and x can be negative. How exactly is this recursive? Are you progressing n by 1 each time? 
# I'm guessing you can only use the multiply operation.
class Solution:
	def myPow(self, x: float, n: int) -> float:
		def helper(x: float, n: int) -> float:
			# base case
			if n == 0:
				return 1

			# idea is to sum of two halves is equal to the original amount -> 2^4 = 2^2 + 2^2 or for odd 2^5 = 2^2 + 2^2 + 2
			half = helper(x, n // 2)

			# check if perfect half
			if n % 2 == 0:
				return half * half
			else:
				return half * half * x
				
		if n < 0:
			return 1 / helper(x, -1 * n)
		else:
			return helper(x, n)

# Recursion is appropriate for this problem because we overflow if we try doing it one at a time. You had to know the property that you can just sum the halves of two values.
# You needed to recognize that excessive n value leads to problems, so try to limit that recursion. Just so happens that you halve them.

		
