func subdomainVisits(cpdomains []string) []string {
	domainFreq := map[string]int{}

	for _, cpdomain := range cpdomains {
		split1 := strings.Split(cpdomain, " ")
		count, _ := strconv.Atoi(split1[0])
		domain := split1[1]

		// split parts and pop from front until empty
		parts := strings.Split(domain, ".")
		for len(parts) > 0 {
			// add joined domain
			domainFreq[strings.Join(parts, ".")] += count

			// remove the front part
			parts = append([]string{}, parts[1:]...)
		}
	}

	// build result
	result := []string{}
	for domain, count := range domainFreq {
		result = append(result, strconv.Itoa(count)+" "+domain)
	}

	return result
}