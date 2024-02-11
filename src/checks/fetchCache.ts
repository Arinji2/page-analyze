export function CheckForFetchCache(sourceCode: string) {
  //export const fetchCache = 'auto' | 'force-fetchCache' | 'error' | 'force-static

  const fetchCache = sourceCode.match(/(?<=export const fetchCache = ")[^"]+/);

  if (fetchCache) {
    return {
      present: true,
      value: fetchCache[0],
    };
  }
  return {
    present: false,
  };
}
