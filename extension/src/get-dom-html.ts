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

export function getDomHtml(): string {
  const domHtml = document.documentElement.outerHTML;
  return prettifyHtml(domHtml)
}
