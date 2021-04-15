export class Matrix {
  constructor(rows) {
    this.rowsValues = rows;
  }

  get rows() {
    return this.rowsValues;
  }

  get columns() {
    throw new Error('Remove this statement and implement this function');
  }
}
