import { logEntireDom } from "./log-dom";

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  logEntireDom()

  if (request.action === "greet") {
    alert("Hello from the content script!");
  }
});
