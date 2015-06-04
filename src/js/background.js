chrome.tabs.onUpdated.addListener(function(tabid) {
  chrome.pageAction.show(tabid);
});
