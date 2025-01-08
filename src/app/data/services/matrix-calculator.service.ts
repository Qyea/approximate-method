import { Injectable, signal } from '@angular/core';

interface OptimalStrategy {
  firstPlayerOptimalStrategyIndex: number;
  secondPlayerOptimalStrategyIndex: number;
  firstPlayerOptimalStrategy: number;
  secondPlayerOptimalStrategy: number;
  gamePrice: number;
}

@Injectable({
  providedIn: 'root',
})
export class MatrixCalculatorService {
  matrix = signal<number[][]>([]);

  setMatrix(newMatrix: number[][]): void {
    this.matrix.set(newMatrix);
  }

  normalizeColumns(matrix: number[][], vector: number[]) {
    return matrix.map((row) =>
      row.map((value, colIndex) => value * vector[colIndex])
    );
  }
  normalizeRows(matrix: number[][], vector: number[]) {
    return matrix.map((row, rowIdex) =>
      row.map((value) => value * vector[rowIdex])
    );
  }

  getNormalizedMatrix(
    matrix: number[][],
    iteration: number,
    probabilityVector: number[],
    type: number
  ) {
    const total = probabilityVector.reduce((sum, prob) => sum + prob, 0);

    const normalizedVector = probabilityVector.map(
      (probability) => probability / total
    );

    let newMatrix: number[][] = [];

    if (type === 0) {
      newMatrix = this.normalizeRows(matrix, normalizedVector);
    } else {
      newMatrix = this.normalizeColumns(matrix, normalizedVector);
    }

    return newMatrix;
  }

  getMinimumStrategyByColumns(
    matrix: number[][],
    probabilityVector: number[],
    iteration: number
  ) {
    const normalizedMatrix = this.getNormalizedMatrix(
      matrix,
      iteration,
      probabilityVector,
      0
    );

    const strategies = Array.from(
      { length: normalizedMatrix[0].length },
      (_, colIndex) =>
        normalizedMatrix.reduce((acc, row) => acc + (row[colIndex] ?? 0), 0)
    );

    console.log('matrix Columns: ', normalizedMatrix);
    console.log('Columns: ', strategies);

    const minIndex = strategies.lastIndexOf(Math.min(...strategies));
    const minValue = strategies[minIndex];

    return { minValue, minIndex };
  }
  getMaximumStrategyByRows(
    matrix: number[][],
    probabilityVector: number[],
    iteration: number
  ) {
    const normalizedMatrix = this.getNormalizedMatrix(
      matrix,
      iteration,
      probabilityVector,
      1
    );

    const strategies = normalizedMatrix.map((row) =>
      row.reduce((acc, val) => acc + val, 0)
    );

    console.log('matrix Rows: ', normalizedMatrix);
    console.log('Rows: ', strategies);

    const maxIndex = strategies.lastIndexOf(Math.max(...strategies));
    const maxValue = strategies[maxIndex];

    return { maxValue, maxIndex };
  }

  calculateResult(
    rows: number,
    columns: number,
    firstStrategy: number,
    steps: number
  ): number {
    const firstPlayerMixedStrategy: number[] = Array.from(
      { length: columns },
      () => 0
    );

    const secondPlayerMixedStrategy: number[] = Array.from(
      { length: rows },
      () => 0
    );

    let optimalStrategyIndex = firstStrategy - 1;

    firstPlayerMixedStrategy[optimalStrategyIndex] += 1;

    const optimalStrategyArray: OptimalStrategy[] = [];

    for (let i = 0; i < steps; i++) {
      console.log(firstPlayerMixedStrategy);
      const minimumStrategy = this.getMinimumStrategyByColumns(
        this.matrix(),
        firstPlayerMixedStrategy,
        i + 1
      );

      secondPlayerMixedStrategy[minimumStrategy.minIndex] += 1;

      console.log(secondPlayerMixedStrategy);

      const maximumStrategy = this.getMaximumStrategyByRows(
        this.matrix(),
        secondPlayerMixedStrategy,
        i + 1
      );

      const gameParty: OptimalStrategy = {
        firstPlayerOptimalStrategyIndex: maximumStrategy.maxIndex,
        secondPlayerOptimalStrategyIndex: minimumStrategy.minIndex,
        firstPlayerOptimalStrategy: maximumStrategy.maxValue,
        secondPlayerOptimalStrategy: minimumStrategy.minValue,
        gamePrice: (maximumStrategy.maxValue + minimumStrategy.minValue) / 2,
      };

      optimalStrategyArray.push(gameParty);

      firstPlayerMixedStrategy[maximumStrategy.maxIndex] += 1;

      optimalStrategyIndex = maximumStrategy.maxIndex;
    }

    console.log(optimalStrategyArray);

    return columns + rows;
  }
}
