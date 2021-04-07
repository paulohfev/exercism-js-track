const GIGASECOND = 1_000_000_000;

export const gigasecond = time => {
  const gsInMilliseconds = GIGASECOND * 1000;
  const timeInMilliseoncds = time.getTime();
  const result = timeInMilliseoncds + gsInMilliseconds;
  return new Date(result);
};
