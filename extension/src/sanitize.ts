export function sanitize(str: string) {
  const newStr = str.replace("Encyclopedia", "xxxxxxx");
  return newStr;
}
