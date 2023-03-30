export function getImage(filePath) {
  return new URL("../assets/images/" + filePath, import.meta.url).href;
}
