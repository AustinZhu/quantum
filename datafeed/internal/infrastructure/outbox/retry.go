package outbox

import "time"

func NextRetry(now time.Time, retryCount int32) time.Time {
	if retryCount < 0 {
		retryCount = 0
	}
	seconds := 1 << minInt(int(retryCount), 6)
	return now.Add(time.Duration(seconds) * time.Second)
}

func minInt(a, b int) int {
	if a < b {
		return a
	}
	return b
}
