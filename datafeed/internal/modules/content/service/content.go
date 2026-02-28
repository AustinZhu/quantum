package service

import datafeedv1 "github.com/AustinZhu/quantum/datafeed/api/datafeed/v1"

func BuildListNewsResponse(items []*datafeedv1.NewsEvent) *datafeedv1.ListNewsResponse {
	return &datafeedv1.ListNewsResponse{Items: items}
}

func BuildListSocialResponse(items []*datafeedv1.SocialEvent) *datafeedv1.ListSocialResponse {
	return &datafeedv1.ListSocialResponse{Items: items}
}
