# Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
# Seems like I need to make a hash_map for the digit to letter mappings.
class Solution:
	def letterCombinations(self, digits: str) -> List[str]:
		if not digits:
			return []

		result = []

		# create the digit mappings
		digit_map = {
			'2': ['a', 'b', 'c'],
			'3': ['d', 'e', 'f'],
			'4': ['g', 'h', 'i'],
			'5': ['j', 'k', 'l'],
			'6': ['m', 'n', 'o'],
			'7': ['p', 'q', 'r', 's'],
			'8': ['t', 'u', 'v'],
			'9': ['w', 'x', 'y', 'z'],
		}

		# formatting the digits into a list of lists
		letters = []
		for digit in digits:
			letters.append(digit_map[digit])

		print(letters)

		combos = set()


		def helper(digits: str, letters: List[List[str]], current: str, index: int) -> None:
			# print(current)
			
			# base case 
			if len(current) == len(digits):
				result.append(current)

			if index == len(digits):
				# print('end of list')
				return

			letter_group = letters[index]
			# print(letter_group)

			for letter in letter_group:
				# check if the combination already exists
				if current + letter in combos:
					continue

				combos.add(current + letter)

				# add to current str and go down that path
				current = current + letter
				helper(digits, letters, current, index + 1)
				current = current[:-1]

		# i think i need to keep track of index so i don't try and take from a letter group i alreayd used
		helper(digits, letters, '', 0)

		return result

		# def helper(digits: str, digit: str, current: str):
		# 	# base case
		# 	if len(current) == len(digits):
		# 		result.append(current)

		# 	for char in digit_map[digit]:
		# 		# avoid repeats
		# 		if sorted(current + char) in combos:
		# 			continue

		# 		combos.add(sorted(current + char))

		# 		current = current + char
		# 		helper(digits, current)
		# 		current = current[:-1]
