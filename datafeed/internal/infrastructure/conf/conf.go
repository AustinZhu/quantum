package conf

import (
	"context"
)

func New(ctx context.Context, configPath string) (Config, error) {
	return Load(ctx, LoadOptions{ConfigPath: configPath})
}
