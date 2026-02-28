package biz

import (
	"context"
	"encoding/json"
	"fmt"

	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/clock"
)

type Repository interface {
	InsertTicksAndEvents(ctx context.Context, ticks []Tick, events []EventRecord) error
}

type Service struct {
	repo  Repository
	clock clock.Clock
}

func NewService(repo Repository, clk clock.Clock) *Service {
	return &Service{repo: repo, clock: clk}
}

func (s *Service) IngestTicks(ctx context.Context, ticks []Tick) (int, error) {
	if len(ticks) == 0 {
		return 0, nil
	}
	now := s.clock.Now()
	events := make([]EventRecord, 0, len(ticks))
	for _, tick := range ticks {
		eventID := fmt.Sprintf("%s:%d:%s:%d", tick.Symbol, tick.TsMS, tick.Source, now.UnixNano())
		envelope := EventEnvelope{
			EventID:      eventID,
			EventType:    EventTypeTickIngested,
			EventVersion: 1,
			OccurredAt:   now,
			Aggregate: AggregateRef{
				Type: "tick",
				ID:   fmt.Sprintf("%s:%d:%s", tick.Symbol, tick.TsMS, tick.Source),
			},
			Payload: TickEventValue{
				Symbol: tick.Symbol,
				TsMS:   tick.TsMS,
				Price:  tick.Price,
				Size:   tick.Size,
				Source: tick.Source,
			},
		}
		payload, err := json.Marshal(envelope)
		if err != nil {
			return 0, err
		}
		events = append(events, EventRecord{
			ID:            eventID,
			AggregateType: envelope.Aggregate.Type,
			AggregateID:   envelope.Aggregate.ID,
			EventType:     envelope.EventType,
			EventVersion:  envelope.EventVersion,
			Payload:       payload,
		})
	}
	if err := s.repo.InsertTicksAndEvents(ctx, ticks, events); err != nil {
		return 0, err
	}
	return len(ticks), nil
}
