func interpret(command string) string {
	// perform a replace all on () and (al)
	s := strings.ReplaceAll(command, "()", "o")
	return strings.ReplaceAll(s, "(al)", "al")
}