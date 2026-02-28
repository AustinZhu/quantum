package biz

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
