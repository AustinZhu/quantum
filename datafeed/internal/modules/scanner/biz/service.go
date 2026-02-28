package biz

import (
	"context"

	marketbiz "github.com/AustinZhu/quantum/datafeed/internal/modules/marketdata/biz"
)

type Repository interface {
	ListSymbols(ctx context.Context) ([]Symbol, error)
	UpsertSymbols(ctx context.Context, items []Symbol) error
	HasProcessedEvent(ctx context.Context, eventID string, consumer string) (bool, error)
	MarkProcessedEvent(ctx context.Context, eventID string, consumer string) error
}

type Service struct {
	repo   Repository
	market *marketbiz.Service
}

func NewService(repo Repository, market *marketbiz.Service) *Service {
	return &Service{repo: repo, market: market}
}

func (s *Service) ListSymbols(ctx context.Context) ([]Symbol, error) {
	items, err := s.repo.ListSymbols(ctx)
	if err != nil {
		return nil, err
	}
	if len(items) > 0 {
		return items, nil
	}
	if s.market == nil {
		return nil, nil
	}
	marketSymbols, err := s.market.ListMarketSymbols(ctx)
	if err != nil {
		return nil, err
	}
	converted := mapMarketSymbols(marketSymbols)
	if len(converted) > 0 {
		_ = s.repo.UpsertSymbols(ctx, converted)
	}
	return converted, nil
}

func (s *Service) SyncFromMarket(ctx context.Context) error {
	if s.market == nil {
		return nil
	}
	marketSymbols, err := s.market.ListMarketSymbols(ctx)
	if err != nil {
		return err
	}
	return s.repo.UpsertSymbols(ctx, mapMarketSymbols(marketSymbols))
}

func (s *Service) ApplyTickSymbol(ctx context.Context, eventID string, symbol string) error {
	if eventID != "" {
		processed, err := s.repo.HasProcessedEvent(ctx, eventID, "scanner-projection")
		if err != nil {
			return err
		}
		if processed {
			return nil
		}
	}
	if symbol != "" {
		if err := s.repo.UpsertSymbols(ctx, []Symbol{{
			Symbol:      symbol,
			Ticker:      symbol,
			Description: symbol,
			Exchange:    "OKX",
			Type:        "spot",
			State:       "live",
			InstType:    "SPOT",
		}}); err != nil {
			return err
		}
	}
	if eventID != "" {
		if err := s.repo.MarkProcessedEvent(ctx, eventID, "scanner-projection"); err != nil {
			return err
		}
	}
	return nil
}

func mapMarketSymbols(items []marketbiz.Symbol) []Symbol {
	out := make([]Symbol, 0, len(items))
	for _, item := range items {
		description := item.ID
		if item.BaseCurrency != "" && item.QuoteCurrency != "" {
			description = item.BaseCurrency + "/" + item.QuoteCurrency + " " + item.InstrumentType
		}
		out = append(out, Symbol{
			Symbol:      item.ID,
			Ticker:      item.ID,
			Description: description,
			Exchange:    "OKX",
			Type:        normalizeSymbolType(item.InstrumentType),
			State:       item.State,
			InstType:    item.InstrumentType,
		})
	}
	return out
}

func normalizeSymbolType(instType string) string {
	switch instType {
	case "SPOT":
		return "spot"
	case "SWAP":
		return "swap"
	case "FUTURES":
		return "futures"
	case "OPTION":
		return "option"
	default:
		return "spot"
	}
}
