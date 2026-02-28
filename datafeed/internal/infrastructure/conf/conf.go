package conf

import (
	"context"

	"github.com/google/wire"
)

var ProviderSet = wire.NewSet(Provide)

func Provide(ctx context.Context, configPath string) (Config, error) {
	return Load(ctx, LoadOptions{ConfigPath: configPath})
}
