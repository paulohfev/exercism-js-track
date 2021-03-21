export const isArmstrongNumber = num => {
  const numbers = Array.from(num.toString()).map(Number);
  const result = numbers.reduce((total, value, _, { length }) => total + value**length, 0);
  return result === num;
};
