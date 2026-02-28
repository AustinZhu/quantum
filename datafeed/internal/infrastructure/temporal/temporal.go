package temporal

import (
	"context"
	"log"
	"time"

	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/conf"
	"github.com/google/wire"
)

type Task interface {
	Name() string
	Interval() time.Duration
	Run(context.Context) error
}

type Runner struct {
	cfg   conf.Config
	tasks []Task
}

var ProviderSet = wire.NewSet(NewRunner)

func NewRunner(cfg conf.Config, tasks []Task) *Runner {
	return &Runner{cfg: cfg, tasks: tasks}
}

func (r *Runner) Run(ctx context.Context) error {
	if len(r.tasks) == 0 {
		<-ctx.Done()
		return ctx.Err()
	}

	errCh := make(chan error, len(r.tasks))
	for _, task := range r.tasks {
		t := task
		go func() {
			ticker := time.NewTicker(t.Interval())
			defer ticker.Stop()
			if err := t.Run(ctx); err != nil {
				log.Printf("temporal task %s bootstrap run error: %v", t.Name(), err)
			}
			for {
				select {
				case <-ctx.Done():
					errCh <- ctx.Err()
					return
				case <-ticker.C:
					if err := t.Run(ctx); err != nil {
						log.Printf("temporal task %s run error: %v", t.Name(), err)
					}
				}
			}
		}()
	}

	<-ctx.Done()
	return ctx.Err()
}
