let x = 18314;
let result = [];
while (x > 0) {
	console.log(`unshifting ${x % 10}`);
	result.unshift(x % 10);
	x = Math.floor(x / 10);
}
console.log(result);
