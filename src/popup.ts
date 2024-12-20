import { getDomHtml } from "./get-dom-html";
import { sanitize } from "./sanitize";
import { updateDom } from "./update-dom";

document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("myButton");
  button!.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tabId = tabs[0].id ?? 0;
      chrome.tabs.sendMessage(tabId, { action: "greet" });
    });
  });
}); //
