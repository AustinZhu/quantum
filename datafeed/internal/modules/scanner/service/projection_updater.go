package service

import (
	"context"
	"encoding/json"

	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/outbox"
	ingestionbiz "github.com/AustinZhu/quantum/datafeed/internal/modules/ingestion/biz"
	"github.com/AustinZhu/quantum/datafeed/internal/modules/scanner/biz"
)

type ProjectionUpdater struct {
	svc *biz.Service
}

func NewProjectionUpdater(svc *biz.Service) *ProjectionUpdater {
	return &ProjectionUpdater{svc: svc}
}

func (u *ProjectionUpdater) Apply(ctx context.Context, event outbox.Event) error {
	if event.EventType != ingestionbiz.EventTypeTickIngested {
		return nil
	}
	var envelope ingestionbiz.EventEnvelope
	if err := json.Unmarshal(event.Payload, &envelope); err != nil {
		return err
	}
	return u.svc.ApplyTickSymbol(ctx, envelope.EventID, envelope.Payload.Symbol)
}
