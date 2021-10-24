const SUB_TWENTY = [
	'',
	'One',
	'Two',
	'Three',
	'Four',
	'Five',
	'Six',
	'Seven',
	'Eight',
	'Nine',
	'Ten',
	'Eleven',
	'Twelve',
	'Thirteen',
	'Fourteen',
	'Fifteen',
	'Sixteen',
	'Seventeen',
	'Eighteen',
	'Nineteen',
]
const TENS = [ '', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety' ]
const THOUSANDS = [ '', 'Thousand', 'Million', 'Billion' ]

function numberToWords(num: number): string {
	// edge case
	if (num == 0) return 'Zero'

	let words = ''
	let mult = 0
	while (num > 0) {
		let chunk = num % 1000
		num = Math.floor(num / 1000)

		// check empty to avoid extraneous space on 000
		let word = helper(chunk, mult)
		if (word != '') {
			words = word + ' ' + words
		}

		mult++
	}

	return words.trim()
}

function helper(num: number, mult: number): string {
	if (num == 0) return ''

	let word = ''

	// split into the hundreds and tens place
	let big = Math.floor(num / 100)
	let small = num % 100

	if (big > 0) {
		word += SUB_TWENTY[big] + ' ' + 'Hundred' + ' '
	}

	// sub twenty case wording is different
	if (small >= 20) {
		let ten = Math.floor(small / 10)
		let one = small % 10
		word += TENS[ten] + ' '
		if (one > 0) {
			word += SUB_TWENTY[one] + ' '
		}
	} else if (small > 0) {
		word += SUB_TWENTY[small] + ' '
	}

	word += THOUSANDS[mult]

	return word
}
