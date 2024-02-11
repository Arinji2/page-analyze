export function CheckForDynamic(sourceCode: string) {
  //export const dynamic = 'auto' | 'force-dynamic' | 'error' | 'force-static

  const dynamic = sourceCode.match(/(?<=export const dynamic = ")[^"]+/);

  if (dynamic) {
    return {
      present: true,
      value: dynamic[0],
    };
  }
  return {
    present: false,
  };
}
