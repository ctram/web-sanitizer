function prettifyHtml(html: string): string {
  let formatted = "";
  let indent = 0;

  html.split(/>\s*</).forEach((element) => {
    if (element.match(/^\/\w/)) {
      indent -= 2;
    }

    formatted += "\n" + " ".repeat(indent) + "<" + element + ">";

    if (element.match(/^<?\w[^>]*[^\/]$/) && !element.startsWith("input")) {
      indent += 2;
    }
  });

  return formatted.substring(1);
}

export function logEntireDom(): void {
  const entireDom = document.documentElement.outerHTML;

  console.log("Entire DOM content:");
  console.log(entireDom);

  console.log("Formatted DOM content:");
  console.log(prettifyHtml(entireDom));
}
