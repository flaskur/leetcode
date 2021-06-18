func slowestKey(releaseTimes []int, keysPressed string) byte {
	keys := map[byte]int{}

	keys[keysPressed[0]] = releaseTimes[0]
	for i := 1; i < len(releaseTimes); i++ {
		key := keysPressed[i]
		duration := releaseTimes[i] - releaseTimes[i-1]
		if _, ok := keys[key]; ok {
			if duration > keys[key] {
				keys[key] = duration
			}
		} else {
			keys[key] = duration
		}
	}

	// now you need to find the key with the longest duration, but there can be multiple so push to array candidates
	longest := []byte{}
	maxDuration := 0
	for key, duration := range keys {
		if duration > maxDuration {
			maxDuration = duration
			longest = []byte{key}
		} else if duration == maxDuration {
			longest = append(longest, key)
		}
	}

	sort.Slice(longest, func(i int, j int) bool { return longest[i] < longest[j] })

	return longest[len(longest)-1]
}

func slowestKey(releaseTimes []int, keysPressed string) byte {
	max := 0
	var key byte

	for i := 0; i < len(releaseTimes); i++ {
		duration := 0
		if i == 0 {
			duration = releaseTimes[i]
		} else {
			duration = releaseTimes[i] - releaseTimes[i-1]
		}

		if duration > max || duration == max && keysPressed[i] > key {
			max = duration
			key = keysPressed[i]
		}
	}

	return key
}