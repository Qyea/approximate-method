import { Component, inject } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialog } from '@angular/material/dialog';

import { AlertDialogComponent } from '../../common-ui/alert-dialog/alert-dialog.component';
import { DimensionInputComponent } from '../../common-ui/dimension-input/dimension-input.component';
import { IterationMatrixComponent } from '../../common-ui/iteration-matrix/iteration-matrix.component';
import { MatrixTableComponent } from '../../common-ui/matrix-table/matrix-table.component';

import { MatrixCalculatorService } from '../../data/services/matrix-calculator.service';

import { OptimalGameRound } from '../../data/interfaces/optimal-game-round';
@Component({
  selector: 'app-solution-calculator',
  imports: [
    MatrixTableComponent,
    DimensionInputComponent,
    MatButtonModule,
    IterationMatrixComponent,
    MatGridListModule,
  ],
  templateUrl: './solution-calculator.component.html',
  styleUrl: './solution-calculator.component.scss',
})
export class SolutionCalculatorComponent {
  matrixCalculatorService = inject(MatrixCalculatorService);
  readonly dialog = inject(MatDialog);

  dataSource: OptimalGameRound[] = [];

  title = 'approximate-method';

  rows: number | null = null;
  columns: number | null = null;

  firstStrategy: number = 0;
  steps: number = 0;

  hasResult: boolean = false;

  openDialog() {
    this.dialog.open(AlertDialogComponent);
  }

  restartApplication() {
    this.rows = null;
    this.columns = null;

    this.firstStrategy = 0;
    this.steps = 0;

    this.hasResult = false;

    this.matrixCalculatorService.resetMatrix();
  }

  getResult() {
    const n = Number(this.rows);
    const m = Number(this.columns);

    const firstStrategy = Number(this.firstStrategy);
    const steps = Number(this.steps);

    if (n && m) {
      const resultsData = this.matrixCalculatorService.calculateResult(
        n,
        m,
        firstStrategy,
        steps
      );

      this.dataSource = resultsData;
      this.hasResult = true;
    } else {
      this.openDialog();
    }
  }
}
