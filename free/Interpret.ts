// I would iterate through the string, and populate a new string that will eventually be returned. While iterating, I basically just check each case using slice portions.
function interpret(command: string): string {
	let str = '';
	for (let i = 0; i < command.length; i++) {
		if (command[i] === 'G') {
			str += 'G';
		} else if (command.slice(i, i + 2) === '()') {
			str += 'o';
		} else if (command.slice(i, i + 4) === '(al)') {
			str += 'al';
		}
	}
	return str;
}
