export class Triangle {
  constructor(...sides) {
    this.sides = sides;
    this.uniqueSides = Array.from(new Set(sides));
  }

  isTriangle(sides) {
    function checkTriangleInequality() {
      const sortSides = sides.sort((a, b) => a - b);
      return sortSides[0] + sortSides[1] >= sortSides[2];
    }

    return sides.every(side => side != 0) && checkTriangleInequality();
  }

  get isEquilateral() {
    return this.isTriangle(this.sides) && this.uniqueSides.length === 1;
  }

  get isIsosceles() {
    const uniqueSides = this.uniqueSides;
    return this.isTriangle(this.sides) && (uniqueSides.length === 2 || uniqueSides.length === 1);
  }

  get isScalene() {
    return this.isTriangle(this.sides) && this.uniqueSides.length === 3;
  }
}
