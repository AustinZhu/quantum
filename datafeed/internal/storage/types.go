package storage

type Tick struct {
	Symbol string
	TsMS   int64
	Price  float64
	Size   float64
	Source string
}

type Bar struct {
	Symbol   string
	Interval string
	TsMS     int64
	Open     float64
	High     float64
	Low      float64
	Close    float64
	Volume   float64
}

type NewsEvent struct {
	ID     string
	Symbol string
	Title  string
	URL    string
	TsMS   int64
	Source string
}

type SocialEvent struct {
	ID        string
	Symbol    string
	Platform  string
	Author    string
	Text      string
	TsMS      int64
	Sentiment float64
}
