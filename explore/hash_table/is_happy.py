# Write an algorithm to determine if a number is happy. A happy number is a number that ends in 1 when you take continuously take the squared sum of all the digits.
# I think you will need to maintain a list of listed digits to break out of the cycle, meaning it will never become a happy number.
# The actual parsing of the digits can be done by converting to a string a splitting, or doing a modulus 10 operation.
class Solution:
	def isHappy(self, n: int) -> bool:
		# edge case
		if n == 0:
			return False
		
		listed_digits = []

		while True:
			sum = 0
			digits = []
			while n > 0:
				digits.append(n % 10)  # add the last digit to digits list
				n //= 10  # perform floor division to remove the last digit

			# print(digits)

			# create the current sum
			for digit in digits:
				sum += digit ** 2

			# print(sum)
			
			# check if that sum already exists, if so, there is a cycle, return false
			if sum in listed_digits:
				return False

			# sum becomes 1 which is happy number, return true
			if sum == 1:
				return True

			# otherwise reset and populate listed_digits to detect cycles
			n = sum
			listed_digits.append(sum)
			
