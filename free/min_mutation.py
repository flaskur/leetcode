# A gene string is 8 chars long with ACGT. Given start, end, and bank, determine min number of mutations needed to mutate from start to end. If no mutation return -1
# It seems like the gene bank is just a check to see if end is inside of the bank. Otherwise it's just using a single pointer and counting the differences.
# Actually it's a bit more complicated than that. All the intermediate steps must be in the bank. You need to check bank on each mutation. But going down linearly might not be the solution. This is recursive. You can iterate once to save the difference indices and right choices as a hash map.
class Solution:
	def minMutation(self, start: str, end: str, bank: List[str]) -> int:
		# edge case, end not a valid mutation gene
		if end not in bank:
			return -1

		mutate_map = {} # key: index | value: mutate char

		# iterate through strings once to find which indices are wrong
		for i in range(len(start)):
			if start[i] != end[i]:
				mutate_map[i] = end[i]

		# there must be at least n values in bank for intermediate differences
		if len(bank) < len(mutate_map):
			return -1

		min_mut = 10000

		def helper(current: str, end: str, bank: List[str], mutations: int, used: set) -> int:
			nonlocal min_mut
			
			# check that current exists in the bank
			if current not in bank:
				return -1

			# base case
			if current == end: 
				return mutations

			# backtracking
			for index in mutate_map.keys():
				# avoid repeats
				if index in used:
					continue

				used.add(index)

				original = current # to backtrack
				current = current[:index] + mutate_map[index] + current[index+1:] 
				min_mut = min(min, helper(current, end, bank, mutations + 1))
				current = original

			return min_mut
			# need to keep a hash set to keep track of used indices to avoid repeats

		return helper(start, end, bank, 0, set())