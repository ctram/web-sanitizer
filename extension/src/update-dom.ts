/**
 * Mutates the DOM!
 */
export function updateDom (str: string) {
    document.documentElement.innerHTML = str;
}