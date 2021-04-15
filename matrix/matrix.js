export class Matrix {
  constructor(matrix) {
    this.matrix = matrix;
  }

  get rows() {
    return this.matrix
      .split(/\n/)
      .map(row => row.split(' ')
        .map((num) => Number(num)));
  }

  get columns() {
    return
  }
}
