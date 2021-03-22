const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export const decodedValue = ([firstCol, secondCol]) => {
  return (COLORS.indexOf(firstCol) * 10) + COLORS.indexOf(secondCol);
}
