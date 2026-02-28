package clock

import (
	"time"

	"github.com/google/wire"
)

type Clock interface {
	Now() time.Time
}

type RealClock struct{}

func (RealClock) Now() time.Time {
	return time.Now().UTC()
}

var ProviderSet = wire.NewSet(New)

func New() Clock {
	return RealClock{}
}
