export function add(accumulator: number, a: number | undefined) {
  if (a === undefined) {
    return accumulator;
  }
  return accumulator + a;
}
