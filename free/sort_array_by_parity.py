# Given an array A of non negative integers, return an array of all even elements, followed by all odd elements.
# One technique would be to traverse through the array and on odd number encounter, swap the next even and increment pointer.
# Start and end pointer approach. If start is odd, check end to see if even, if so then swap and move both pointers inward. If start pointer is even, only move start pointer. If start pointer is odd and end pointer is even, only move end pointer and iterate again until start and end pointer cross each other.
# You can do this in place without extra memory.
class Solution:
	def sortArrayByParity(self, A: List[int]) -> List[int]:
		# edge case
		if len(A) <= 1:
			return A
		
		i = 0
		j = len(A) - 1

		while i < j:
			# start is already even
			if A[i] % 2 == 0:
				i += 1
				continue

			# start must be odd
			# if end is odd, move end pointer inwards and repeat
			if A[j] % 2 == 1:
				j -= 1
				continue

			# otherwise swap and update both pointers
			A[i], A[j] = A[j], A[i]
			i += 1
			j -= 1

		return A

# instead of in place, you could have just made a new array, pushed all the even values in relative order, then the leftover odd values.