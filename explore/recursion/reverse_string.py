# Write a function that reverses a string recursively. Must be done in place without extra memory.
# The hard part about recursive problems if framely it correctly.
# The base case is when the string list len is 0 or 1, but we need to keep track of a global reverse list value. How do I memoize that?
# Remember that if you make a helper method, only include self as an argument if it's a method of the class, and call it with self.methodName().
class Solution:
	def reverseString(self, s: List[str]) -> None:
		def helper(left: int, right: int, s: List[str]) -> None:
			# base case
			if left >= right:
				return

			s[left], s[right] = s[right], s[left]

			helper(left + 1, right - 1, s)

		helper(0, len(s) - 1, s)

# Alright so the process whenever you have a recursion problem is to establish a base case stopping point and then a progression plan to get close to that while build or mutating a result.
# If you need to have some global memory, you could define another list in the scope of the function and edit in the helper function, but that means you scope the helper inside the method.
