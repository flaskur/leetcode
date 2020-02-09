let x = 18314;
let result = [];
while (x > 0) {
	console.log(`unshifting ${x % 10}`);
	result.unshift(x % 10);
	x = Math.floor(x / 10);
}
console.log(result);

// let temp = [ 1, 2, 3, 4, 5 ];
let temp = 'some string banana';
let i = 0;
let j = temp.length - 1;
while (i < j) {
	let t = temp[i];
	temp = temp.slice(0, i) + temp[j] + temp.slice(i + 1, temp.length);
	temp = temp.slice(0, j) + t + temp.slice(j + 1, temp.length);
	i += 1;
	j -= 1;
}
console.log(temp);

let space = 'abc';
console.log(space.slice(1));
