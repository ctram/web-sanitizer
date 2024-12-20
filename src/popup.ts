import { logEntireDom } from "./log-dom";


document.addEventListener("DOMContentLoaded", function () {
  console.log('before logEntireDom')
  logEntireDom()
  console.log('after logEntireDom')
  
  var button = document.getElementById("myButton");
  button!.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tabId = tabs[0].id ?? 0;
      chrome.tabs.sendMessage(tabId, { action: "greet" });
    });
  });
});
