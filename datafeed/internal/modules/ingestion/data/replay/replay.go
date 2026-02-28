package replay

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"

	ingestionbiz "github.com/AustinZhu/quantum/datafeed/internal/modules/ingestion/biz"
)

type CSVReplayAdapter struct{}

func (a CSVReplayAdapter) Load(path string) ([]ingestionbiz.Tick, error) {
	file, err := os.Open(path)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	out := make([]ingestionbiz.Tick, 0)
	s := bufio.NewScanner(file)
	for s.Scan() {
		line := strings.TrimSpace(s.Text())
		if line == "" || strings.HasPrefix(line, "#") {
			continue
		}
		parts := strings.Split(line, ",")
		if len(parts) != 5 {
			return nil, fmt.Errorf("invalid replay row: %q", line)
		}
		ts, err := strconv.ParseInt(parts[1], 10, 64)
		if err != nil {
			return nil, err
		}
		price, err := strconv.ParseFloat(parts[2], 64)
		if err != nil {
			return nil, err
		}
		size, err := strconv.ParseFloat(parts[3], 64)
		if err != nil {
			return nil, err
		}
		out = append(out, ingestionbiz.Tick{Symbol: parts[0], TsMS: ts, Price: price, Size: size, Source: parts[4]})
	}
	if err := s.Err(); err != nil {
		return nil, err
	}
	return out, nil
}
