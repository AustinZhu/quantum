package main

import (
	"log"
	"os"
	"os/signal"
	"syscall"

	"github.com/AustinZhu/quantum/datafeed/internal/app/jobs"
	urfavecli "github.com/urfave/cli/v2"
)

func main() {
	app := &urfavecli.App{
		Name:  "datafeed-jobs",
		Usage: "run datafeed jobs runtime",
		Flags: []urfavecli.Flag{&urfavecli.StringFlag{Name: "config", Aliases: []string{"c"}, Usage: "path to config file"}},
		Action: func(c *urfavecli.Context) error {
			ctx, stop := signal.NotifyContext(c.Context, syscall.SIGINT, syscall.SIGTERM)
			defer stop()
			instance, cleanup, err := jobs.InitializeJobsApp(ctx, c.String("config"))
			if err != nil {
				return err
			}
			defer cleanup()
			return instance.Run(ctx)
		},
	}
	if err := app.Run(os.Args); err != nil {
		log.Fatal(err)
	}
}
