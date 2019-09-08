export function calcBudget(inputSpeed, inputLoadtime) {
  const speed = parseInt(inputSpeed, 10);
  const loadtime = parseInt(inputLoadtime, 10);

  return speed * loadtime;
}