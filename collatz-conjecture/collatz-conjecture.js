export const steps = num => {
  const numbers = [num];
  if (num < 1) throw new Error('Only positive numbers are allowed');

  while (num > 1) {
    if (num % 2 == 0) {
      num = num / 2
    } else {
      num = 3 * num + 1
    }
    numbers.push(num);
  }

  return numbers.lastIndexOf(1);
};
