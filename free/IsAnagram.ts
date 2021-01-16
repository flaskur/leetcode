// to determine if one string is an anagram of another, i would populate a count hash map for the first string, then iterate through second string. Then I check if results are all 0. or I could check length first, then if it passes the 0 count check for the hash map, then return true.
const isAnagram = (s: string, t: string): boolean => {
	// edge case
	if (s.length !== t.length) return false;

	const charCount = new Map<string, number>();

	// populate charCount hash map
	for (let char of s) {
		// console.log(char);
		// charCount.has(char) ? charCount.set(char, charCount.get(char) + 1) : charCount.set(char, 1);
		if (charCount.has(char)) {
			charCount.set(char, charCount.get(char)! + 1);
		} else {
			charCount.set(char, 1);
		}
	}

	//     for (let [key, val] of charCount) {
	//         console.log(`key of ${key} with val ${val}`)
	//     }

	// check with second string
	for (let char of t) {
		if (!charCount.has(char) || charCount.get(char)! < 1) return false;
		charCount.set(char, charCount.get(char)! - 1);
	}

	return true;
};

// brute force would be to iterate through first string, iterate through second string to match a char, on match it will remove the char from second string. success means second string is empty.
// compiling directly from ts, means I need a tsconfig file setup that targets es6+
// tsconfig by default will not be looked at if you specify a file, which means you need to explicitly set --lib and --target if you are using higher order stuff
// it will generate a js file and you should run that normally. note that tsc is meant to compile all of your ts files in the project folder, generally not a single one
// ts-node will not generate a js file, instead it will just run and execute the ts file, but it reads the tsconfig so you need it in the project for it to work.
// generally for dev you would just setup tsc to compile js file on save or build step, but for single files it might be easier just to use ts-node.

// console.log(isAnagram('rat', 'car'));
// console.log(isAnagram('mirror', 'romirr'));
