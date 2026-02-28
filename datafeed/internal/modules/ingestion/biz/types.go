package biz

import "time"

const (
	EventTypeTickIngested = "datafeed.tick_ingested.v1"
)

type Tick struct {
	Symbol string
	TsMS   int64
	Price  float64
	Size   float64
	Source string
}

type EventEnvelope struct {
	EventID      string         `json:"event_id"`
	EventType    string         `json:"event_type"`
	EventVersion int32          `json:"event_version"`
	OccurredAt   time.Time      `json:"occurred_at"`
	Aggregate    AggregateRef   `json:"aggregate"`
	Payload      TickEventValue `json:"payload"`
}

type AggregateRef struct {
	Type string `json:"type"`
	ID   string `json:"id"`
}

type TickEventValue struct {
	Symbol string  `json:"symbol"`
	TsMS   int64   `json:"ts_ms"`
	Price  float64 `json:"price"`
	Size   float64 `json:"size"`
	Source string  `json:"source"`
}

type EventRecord struct {
	ID            string
	AggregateType string
	AggregateID   string
	EventType     string
	EventVersion  int32
	Payload       []byte
}
