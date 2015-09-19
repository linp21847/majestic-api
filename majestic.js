var Majestic = {
	baseUrl: "http://richard.dev/majestic-chrome-admin/api.php",
	// baseUrl: "http://104.236.147.49/majestic-chrome-admin/api.php",
	
	api_key: majestic_api_key,
	defaultItemCount: 5,
	config: function(apiKey) {
		if (apiKey && apiKey.length > 0)
			Majestic.api_key = apiKey;
	},

	getData: function(cmd, itemsCnt, items, dataSource, callback){
		var self = Majestic,
			funcIndex = self.commands.indexOf(cmd);

		if (funcIndex > -1) {
			self[cmd](items, dataSource, callback);
		} else {
			console.log("Unknown Commands found");
		}
	},

	sendAjaxRequest: function(url, params, callback) {
		$.ajax({
			url: url,
			type: "GET",
			crossDomain: true,
			dataType: "json",
			data: params,
			success: function(res) {
				if (typeof callback === "function")
					callback(res);
				else
					console.log(res);
			},
			error: function(x, e) {
				console.log(e);
			}
		});
	},

	commands: [
				"GetIndexItemInfo", "GetBackLinkData", "GetAnchorText", "GetBackLinksHistory",
				"GetHostedDomains", "GetKeywordInfo", "GetLinkProfile", "GetNewLostBackLinks",
				"GetNewLostBackLinkCalendar", "GetRefDomains", "GetRefDomainInfo",
				"GetTopics", "GetTopPages", "GetSubscriptionInfo", "GetDownloadsList",
				"DeleteDownloads", "DownloadBackLinks", "DownloadRefDomainBackLinks",
				"SearchByKeyword", "SubmitURLsToCrawl"
			],

	GetIndexItemInfo: function(items, dataSource, callback) {
		var self = Majestic,
			url = self.baseUrl,
			params = {
						cmd: "GetIndexItemInfo",
						items: items,
						dataSource: dataSource
					};

		self.sendAjaxRequest(url, params, callback);
	},

	GetBackLinkData: function(item, count, dataSource, callback) {
		var self = Majestic,
			url = self.baseUrl,
			params = {
						cmd: "GetBackLinkData",
						item: item,
						count: count,
						dataSource: dataSource || "fresh"
					};

		self.sendAjaxRequest(url, params, callback);
	},

	GetAnchorText: function(item, count, dataSource, callback) {
		var self = Majestic,
			url = self.baseUrl,
			params = {
				cmd: "GetAnchorText",
				item: item,
				count: count,
				dataSource: dataSource || "fresh"
			};
			
		self.sendAjaxRequest(url, params, callback);
	},

	GetBackLinksHistory: function() {
		//
	},

	GetHostedDomains: function() {
		//
	},

	GetKeywordInfo: function() {
		//
	},

	GetLinkProfile: function() {
		//
	},

	GetNewLostBackLinks: function() {
		//
	},

	GetNewLostBackLinkCalendar: function() {
		//
	},

	GetRefDomains: function() {
		//
	},

	GetRefDomainInfo: function() {
		//
	},

	GetTopics: function() {
		//
	},

	GetTopPages: function() {
		//
	},

	GetSubscriptionInfo: function() {
		//
	},

	GetDownloadsList: function() {
		//
	},

	DeleteDownloads: function() {
		//
	},

	DownloadBackLinks: function() {
		//
	},

	DownloadRefDomainBackLinks: function() {
		//
	},

	SearchByKeyword: function() {
		//
	},

	SubmitURLsToCrawl: function() {
		//
	}
}