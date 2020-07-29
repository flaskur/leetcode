/**
 * Given a valid ip address, return the defanged version which replaces all periods with [.]
 * 
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = (address) => {
	let regex = new RegExp(/\./, 'g');

	return address.replace(regex, '[.]');
};
