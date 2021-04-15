export class HighScores {
  constructor(scores) {
    this.scorePoints = scores;
  }

  sortPointsDescendingOrder(pointsList) {
    return pointsList.sort((a, b) => b - a);
  }

  get scores() {
    return this.scorePoints;
  }

  get latest() {
    const points = this.scorePoints;
    return points[points.length - 1];
  }

  get personalBest() {
    return this.sortPointsDescendingOrder(this.scorePoints)[0];
  }

  get personalTopThree() {
    return this.sortPointsDescendingOrder(this.scorePoints).splice(0, 3)
  }
}
