# On the first two, we write 0. Subsequent row, look at previos row and replace 0 with 01 and each 1 with 10. Given row N and index K, return Kth symbol in row N where K and N are both 1 indexed.
class Solution:
	# tracing this out
	# say N is 4 K is 5
	# mid calculates to row 3 having 4 elements
	# k represents the index position of the current row of 4, but it doesn't exist for this case
	# that means it must be in the second half so we run the complement of the previous half
	# running not kth(3, 1) which is to say that the 5th position in row 4 is the same as complement of the 1st position in row 3
	# mid is now 2, k <= mid so it matches the same value and executes kth(2, 1)
	# mid is now 1, k <= mid still executes kth(1, 1) which is base case of 0
	# we got 0 but we complement to 1 for the original 5th position of 4th row

	# that was really hard to figure out, recognize that first half is same, second half is complement and progressively move based on whether or not k index is in first or last half
	# rewrite from memory and logic, really understand this first

	def kthGrammar(self, N: int, K: int) -> int:
		# edge case
		if N < 1:
			return None
		
		def helper(n: int, k: int) -> int:
			# base case
			if n == 1 and k == 1:
				return 0

			# pattern is that for a particular row and index, if the index is part of the first half, it matches the value of the previous row, otherwise you take the complement
			# but you need to first determine if k would be in the first or last half by finding length of the previous row
			half_len = (2 ** (n - 1)) / 2 # just math you had to notice that it doubles each time

			# now determine if k is in first or last half
			if k <= half_len:
				return helper(n - 1, k) # k doesn't change in this case
			else:
				# value will match the complement of the original first half with same relative placement k
				return helper(n - 1, k - half_len) ^ 1 # used a xor operation here because ~ and ! failed

		return helper(N, K)


	# def kthGrammar(self, N: int, K: int) -> int:
	# 	# edge case
	# 	if N < 1:
	# 		return None
		
	# 	def helper(n: int) -> List[int]:
	# 		# base case
	# 		if n == 1:
	# 			return [0]

	# 		previous_list = helper(n - 1)

	# 		for i in range(len(previous_list) - 1, -1, -1):
	# 			if previous_list[i] == 0:
	# 				previous_list[:] = previous_list[:i] + [0] + [1] + previous_list[i+1:] 
	# 			elif previous_list[i] == 1:
	# 				previous_list[:] = previous_list[:i] + [1] + [0] + previous_list[i+1:]

	# 		return previous_list

	# 	return helper(N)[K - 1] # because k indexing by 1

	# times out on excessively large K value because it implies a huge array size. Likely need to continue to halve K value and note the pattern of n array based on modulus 2 of it.