import { getDomHtml } from "./get-dom-html";
import { sanitize } from "./sanitize";
import { updateDom } from "./update-dom";

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  const domHtml = getDomHtml()
  const sanitizedHtml = sanitize(domHtml)
  updateDom(sanitizedHtml)

  if (request.action === "greet") {
    alert("Hello from the content script!");
  }
});
