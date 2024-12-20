chrome.runtime.onInstalled.addListener(function() {
  console.log('Extension installed');
});

chrome.action.onClicked.addListener(function(tab) {
  console.log('Extension icon clicked');
});
