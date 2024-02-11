export function CheckForRevalidate(sourceCode: string) {
  // false | 0 | number
  const revalidate = sourceCode.match(
    /^export const revalidate = (false|0|\d+)\b/
  );

  if (revalidate) {
    return {
      present: true,
      value: revalidate[1],
    };
  }
  return {
    present: false,
  };
}
