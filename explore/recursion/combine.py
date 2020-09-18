# Given two integers n and k, return all possible combinations of k numbers of 1 ... n.
# General outline is to create a global list to populate when you reach base case of k nums.
# You should ignore numbers that already exist in the current list. Backtrack for each entered number by popping off current array.
class Solution:
	def combine(self, n: int, k: int) -> List[List[int]]:
		result = []

		# need to avoid duplicate value but in different order
		combos = set()

		def helper(n: int, k: int, current: List[int], j: int) -> None:
			# print(current)
			
			# base case
			if len(current) == k:
				result.append(current[:])
				return

			for i in range(j, n+1):
				# no repeats
				if i in current:
					continue
				
				# if you add this number it would just be a duplicate so skip it
				if str((sorted(current[:] + [i]))) in combos:
					continue

				# add to the hash set to ensure that same values different order are not duplicated
				combos.add(str((sorted(current[:] + [i]))))

				# otherwise append to the list and call helper with this path
				current.append(i)
				helper(n, k, current, i+1)

				# backtrack and remove the value
				current.pop()

		helper(n, k, [], 1)

		return result

		# to solve the time out issue, assume that we start at j, which is the number after the i before, because we assume that the combinations will never start with some number that already occurred.
