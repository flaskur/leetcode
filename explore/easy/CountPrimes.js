/**
 * Count the number of prime numbers less than a non negative number n. For example given n is 10, there are 4 prime numbers namely 2, 3, 5, 7.
 * What is the pattern for prime numbers? Prime number are only divisible by 1 and itself. All prime numbers are odd except for 2. 1 is not a prime number. The approach right now is to use a counter to count up to n and then for each number I need to know the number of divisors for it. The problem with that is that it's incredibly bad for time complexity to do that.
 * Any particular number cannot be divisible by > n/2 since that's impossible. That means we can cut down the number of checks. Actually you only need to check up to square root n since n = pq, the other case would be covered. You can skip the even values since you know that will not be prime.
 * 
 * @param {number} n
 * @return {number}
 */
const countPrimes = function(n) {
	if (n <= 2) return 0;

	let primes = [];
	if (n > 2) primes.push(2);

	// I skip the even values since they cannot be prime. A the numbers up to n can still be a prime though.
	for (let i = 3; i < n; i += 2) {
		if (isPrime(i)) {
			console.log(`${i} is prime, push onto list`);
			primes.push(i);
		}
	}
	console.log(primes);

	return primes.length;
};

// A number is prime if the number can only be divided by 1 and itself.
const isPrime = function(num) {
	console.log(`isPrime runs with ${num}`);
	for (let i = 3; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			console.log(`${num} is divisible by ${i}, return false`);
			return false;
		}
	}

	return true;
};

// Actual correct way but somewhat confusing.
const countPrimes = function(n) {
	let isPrime = [];
	// Initially setting every single value in between 2 inclusive and n exclusive to true prime.
	for (let i = 2; i < n; i++) isPrime[i] = true;

	// End condition is i * i < n because it avoid calling Math.sqrt(). You do sqrt because if n is divisible by p then, p cannot be more than Math.sqrt(n).
	for (let i = 2; i * i < n; i++) {
		// If already marked is false, don't need to check again, go to next iteration.
		if (!isPrime[i]) continue;

		// Confusing portion explained by seive.
		for (let j = i * i; j < n; j += i) isPrime[j] = false;
	}

	// Just count and return number of primes.
	let count = 0;
	for (let i = 2; i < n; i++) {
		if (isPrime[i]) count += 1;
	}

	return count;
};
