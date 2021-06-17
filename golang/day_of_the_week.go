// given date return the corresponding day of the week.
func dayOfTheWeek(day int, month int, year int) string {
	dayMap := map[int]string{
		0: "Sunday",
		1: "Monday",
		2: "Tuesday",
		3: "Wednesday",
		4: "Thursday",
		5: "Friday",
		6: "Saturday",
	}

	date := time.Date(year, time.Month(month), day, 0, 0, 0, 0, time.UTC)
	return dayMap[int(date.Weekday())]
}