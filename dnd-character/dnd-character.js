export const abilityModifier = score => {
  const result = Math.floor((score - 10) / 2);
  if (score < 3) throw new Error('Ability scores must be at least 3');
  if (score > 18) throw new Error('Ability scores can be at most 18');
  return result;
};

const getRandomDiceValue = () => Math.floor(Math.random() * 6 + 1);

export class Character {
  static rollAbility() {
    const arr = new Array(4);
    const values = arr.fill(null).map(() => getRandomDiceValue());
    const largestThreeValues = values.sort().slice(1);
    const result = largestThreeValues.reduce((a, b) => a + b);
    return result;
  }

  get strength() {
    this.charStrength = this.charStrength || Character.rollAbility();
    return this.charStrength;
  }

  get dexterity() {
    this.charDexterity = this.charDexterity || Character.rollAbility();
    return this.charDexterity;
  }

  get constitution() {
    this.charConstitution = this.charConstitution || Character.rollAbility();
    return this.charConstitution;
  }

  get intelligence() {
    this.charIntelligence = this.charIntelligence || Character.rollAbility();
    return this.charIntelligence;
  }

  get wisdom() {
    this.charWisdom = this.charWisdom || Character.rollAbility();
    return this.charWisdom;
  }

  get charisma() {
    this.charCharisma = this.charCharisma || Character.rollAbility();
    return this.charCharisma;
  }

  get hitpoints() {
    this.charHitpoints = this.charHitpoints || abilityModifier(this.charConstitution) + 10;
    return this.charHitpoints;
  }
}
