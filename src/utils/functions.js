export function trimLinkReadNext(str) {
  const regex = /<a.*entry-more-link.*\/a>/gi;
  const result = str.replace(regex, "");
  console.log("result", result);

  return result;
}
