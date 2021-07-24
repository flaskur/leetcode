func defangIPaddr(address string) string {
	// use replace all on every occurrence of .
	return strings.ReplaceAll(address, ".", "[.]")
}