export function trimLinkReadNext(str) {
  const regex = /<a.*entry-more-link.*\/a>/gi;
  const result = str.replace(regex, "");

  return result;
}

const words = ["mobile", "iphone", "android"];
export function isMobile() {
  const userAgent = window.navigator.userAgent.toLowerCase();

  return words.reduce(
    (acc, word) => (userAgent.includes(word) ? true : acc),
    false
  );
}
