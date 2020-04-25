/**
 * Write down a number, and friend guesses the number. Each time provide a hint to indicate how many digits in said guess match in both digit and position (bulls) and how many digits match the secret number but in the wrong position (cows). A => Bull B => Cow
 * 
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
// const getHint = (secret, guess) => {
// 	// char count hash
// 	let countHash = {};
// 	[ ...secret ].forEach((char) => {
// 		countHash[char] ? countHash[char]++ : (countHash[char] = 1);
// 	});

// 	console.log(countHash);

// 	let bullCount = 0;
// 	let cowCount = 0;
// 	for (let i = 0; i < secret.length; i++) {
// 		if (secret[i] === guess[i]) {
//       bullCount++;
//       countHash[secret[i]] -= 1;
// 			console.log('match', i);
// 		} else if (countHash[guess[i]] > 0) {
// 			cowCount += 1;
// 			countHash[guess[i]] -= 1;
// 			console.log('cow', i);
// 		}
// 	}

// 	return bullCount.toString() + 'A' + cowCount.toString() + 'B';
// };

const getHint = (secret, guess) => {
	let bullCount = 0;
	let cowCount = 0;
	let stripSecret = '';
	let countHash = {};

	for (let i = 0; i < secret.length; i++) {
		if (secret[i] === guess[i]) {
			console.log('bull at', i);
			bullCount += 1;
		} else {
			countHash[guess[i]] ? countHash[guess[i]]++ : (countHash[guess[i]] = 1);
			stripSecret += secret[i];
		}
	}

	console.log('strip', stripSecret);
	console.log(countHash);

	[ ...stripSecret ].forEach((char) => {
		if (countHash[char] > 0) {
			console.log('cow with', char);
			cowCount += 1;
			countHash[char] -= 1;
		}
	});

	return bullCount.toString() + 'A' + cowCount.toString() + 'B';
};

// Solution is to handle the bulls first and if they don't match, add to the stripped string and populate the count hash with the guess characters. To find the cows, you iterate through the stripped string (from secret) and see if it exists in the count hash (of unmatched guesses).
