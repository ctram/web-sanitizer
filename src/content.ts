chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  const html = document.documentElement.outerHTML;
  
  console.log("Entire DOM of the web page:");
  console.log(html);

  if (request.action === "greet") {
    alert("Hello from the content script!");
  }
});
