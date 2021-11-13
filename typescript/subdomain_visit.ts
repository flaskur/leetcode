function subdomainVisits(cpdomains: string[]): string[] {
	let freq = new Map<string, number>()

	cpdomains.forEach(cpdomain => {
		let cp = cpdomain.split(' ')
		let count = parseInt(cp[0])
		let domain = cp[1]

		while (domain.length != 0) {
			freq.set(domain, count + (freq.get(domain) ?? 0)) // default to count if undefined
			domain = domain.split('.').slice(1).join('.') // convert to array, remove first index, convert to string
		}
	})

	// populate result string interpolation
	let result = []
	for (let [domain, count] of freq.entries()) {
		result.push(`${count} ${domain}`)
	}
	
	return result
}