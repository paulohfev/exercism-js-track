export const age = (planet, seconds) => {
  const yearsOnEarth = seconds / 31_557_600;

  const ageOnPlanet = {
    'earth': yearsOnEarth, 
    'mercury': yearsOnEarth / 0.2408467,
    'venus': yearsOnEarth / 0.61519726,
    'mars': yearsOnEarth / 1.8808158,
    'jupiter': yearsOnEarth / 11.862615,
    'saturn': yearsOnEarth / 29.447498,
    'uranus': yearsOnEarth / 84.016846,
    'neptune': yearsOnEarth / 164.79132
  }

  return Number(ageOnPlanet[planet].toFixed(2));
};
