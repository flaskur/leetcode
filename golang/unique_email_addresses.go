func numUniqueEmails(emails []string) int {
	uniqueEmails := map[string]bool{}

	for _, email := range emails {
		// split each email by '@' delimiter
		splitEmail := strings.Split(email, "@")

		// remove all periods
		local := strings.ReplaceAll(splitEmail[0], ".", "")

		// split by + and take first part
		splitLocal := strings.Split(local, "+") // might not exist

		// add to emails hash set with rebuilt @+domain
		uniqueEmail := splitLocal[0] + "@" + splitEmail[1]
		uniqueEmails[uniqueEmail] = true
	}

	return len(uniqueEmails)
}