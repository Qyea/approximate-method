export class MatrixHelpers {
  normalizeVector(vector: number[]): number[] {
    const total = vector.reduce((sum, val) => sum + val, 0);
    return vector.map((val) => val / total);
  }

  scaleMatrix(
    matrix: number[][],
    vector: number[],
    byRows: boolean
  ): number[][] {
    if (byRows && matrix.length !== vector.length) {
      throw new Error(
        'Length of vector must match the number of rows in the matrix.'
      );
    }
    if (!byRows && matrix[0]?.length !== vector.length) {
      throw new Error(
        'Length of vector must match the number of columns in the matrix.'
      );
    }

    return matrix.map((row, rowIndex) =>
      row.map((value, colIndex) =>
        Number(
          (value * (byRows ? vector[rowIndex] : vector[colIndex])).toFixed(2)
        )
      )
    );
  }

  getNormalizedMatrix(
    matrix: number[][],
    probabilityVector: number[],
    byRows: boolean
  ): number[][] {
    const normalizedVector = this.normalizeVector(probabilityVector);
    return this.scaleMatrix(matrix, normalizedVector, byRows);
  }
}
