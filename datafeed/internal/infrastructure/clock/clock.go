package clock

import (
	kclock "k8s.io/utils/clock"
)

type Clock = kclock.Clock

func New() Clock {
	return kclock.RealClock{}
}
