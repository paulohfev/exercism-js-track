const NUCLEOTIDES = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
}

export const toRna = dnaStrand => {
  return dnaStrand
    .split('')
    .map(s => NUCLEOTIDES[s])
    .join("") || "";
};
