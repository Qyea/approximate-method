import { Injectable, signal } from '@angular/core';
import { OptimalGameRound } from '../interfaces/optimal-game-round';
import { MatrixHelpers } from '../../helpers/matrix-helpers';

@Injectable({
  providedIn: 'root',
})
export class MatrixCalculatorService {
  matrix = signal<number[][]>([]);
  matrixHelpers = new MatrixHelpers();

  setMatrix(newMatrix: number[][]): void {
    this.matrix.set(newMatrix);
  }

  resetMatrix(): void {
    this.matrix.set([]);
  }

  findOptimalStrategy(
    matrix: number[][],
    probabilityVector: number[],
    byRow: boolean
  ) {
    const normalizedMatrix = this.matrixHelpers.getNormalizedMatrix(
      matrix,
      probabilityVector,
      byRow
    );

    const strategies = byRow
      ? Array.from(
          { length: normalizedMatrix[0].length },
          (_, colIndex) =>
            Math.round(
              normalizedMatrix.reduce(
                (acc, row) => acc + (row[colIndex] ?? 0),
                0
              ) * 100
            ) / 100
        )
      : normalizedMatrix.map(
          (row) =>
            Math.round(row.reduce((acc, val) => acc + val, 0) * 100) / 100
        );

    let optimalValue = byRow
      ? Math.min(...strategies)
      : Math.max(...strategies);

    optimalValue = Number(optimalValue.toFixed(2));

    const optimalIndex = strategies.lastIndexOf(optimalValue);

    return { optimalValue, optimalIndex, strategies };
  }

  calculateResult(
    rows: number,
    columns: number,
    firstStrategy: number,
    steps: number
  ): OptimalGameRound[] {
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

    const optimalRounds: OptimalGameRound[] = [];

    for (let i = 0; i < steps; i++) {
      console.log(firstPlayerMixedStrategy);
      const minimumStrategy = this.findOptimalStrategy(
        this.matrix(),
        firstPlayerMixedStrategy,
        true
      );

      secondPlayerMixedStrategy[minimumStrategy.optimalIndex] += 1;

      const maximumStrategy = this.findOptimalStrategy(
        this.matrix(),
        secondPlayerMixedStrategy,
        false
      );

      const roundResult: OptimalGameRound = {
        iteration: i + 1,
        secondPlayerOptimalStrategyIndex: minimumStrategy.optimalIndex,
        secondPlayerOptimalStrategy: minimumStrategy.optimalValue,
        firstPlayerOptimalStrategies: minimumStrategy.strategies,
        firstPlayerOptimalStrategyIndex: optimalStrategyIndex,
        firstPlayerOptimalStrategy: maximumStrategy.optimalValue,
        secondPlayerOptimalStrategies: maximumStrategy.strategies,
        gamePrice:
          (maximumStrategy.optimalValue + minimumStrategy.optimalValue) / 2,
      };

      optimalRounds.push(roundResult);

      firstPlayerMixedStrategy[maximumStrategy.optimalIndex] += 1;

      optimalStrategyIndex = maximumStrategy.optimalIndex;
    }

    return optimalRounds;
  }
}
