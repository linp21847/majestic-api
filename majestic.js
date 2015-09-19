var Majestic = {
	baseUrl: "http://api.majestic.com/api/json",
	commands: [
				"GetIndexItemInfo",
				"GetBackLinkData",
				"GetAnchorText",
				"GetBackLinksHistory",
				"GetHostedDomains",
				"GetKeywordInfo",
				"GetLinkProfile",
				"GetNewLostBackLinks",
				"GetNewLostBackLinkCalendar",
				"GetRefDomains",
				"GetRefDomainInfo",
				"GetTopics",
				"GetTopPages",
				"GetSubscriptionInfo",
				"GetDownloadsList",
				"DeleteDownloads",
				"DownloadBackLinks，"
				"DownloadRefDomainBackLinks，"
				"SearchByKeyword，"
				"SubmitURLsToCrawl"
			],
	api_key: majestic_api_key,
	defaultItemCount: 5,
	config: function(apiKey) {
		if (apiKey && apiKey.length > 0)
			Majestic.api_key = apiKey;
	}
}