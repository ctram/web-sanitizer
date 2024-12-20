chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "greet") {
    alert('Hello from the content script!');
  }
});
