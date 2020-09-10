# Given strings j jewels, and s stones, find how many stones are also jewels. All jewels are distinct and everything is case sensitive.
# Pretty simple. Make a boolean hash map for each jewel then iterate through stones and count sum for each jewel encounter.
class Solution:
	def numJewelsInStones(self, J: str, S: str) -> int:
		# edge case
		if not J or not S:
			return 0

		# populate jewel hash
		jewel_hash = {}
		for jewel in J:
			if jewel not in jewel_hash:
				jewel_hash[jewel] = True

		# iterate through stones and build jewel count
		jewel_count = 0
		for stone in S:
			if stone in jewel_hash:
				jewel_count += 1

		return jewel_count