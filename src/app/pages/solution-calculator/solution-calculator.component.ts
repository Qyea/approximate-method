import { Component, inject } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialog } from '@angular/material/dialog';

import { LoggerService } from '../../data/services/logger.service';
import { MatrixCalculatorService } from '../../data/services/matrix-calculator.service';

import { AlertDialogComponent } from '../../common-ui/alert-dialog/alert-dialog.component';
import { DimensionInputComponent } from '../../common-ui/dimension-input/dimension-input.component';
import { IterationMatrixComponent } from '../../common-ui/iteration-matrix/iteration-matrix.component';
import { MatrixTableComponent } from '../../common-ui/matrix-table/matrix-table.component';

import { OptimalGameRound } from '../../data/interfaces/optimal-game-round';
import { MathjaxComponent } from '../../common-ui/mathjax/mathjax.component';
@Component({
  selector: 'app-solution-calculator',
  imports: [
    MatrixTableComponent,
    DimensionInputComponent,
    MatButtonModule,
    IterationMatrixComponent,
    MatGridListModule,
    MathjaxComponent,
  ],
  templateUrl: './solution-calculator.component.html',
  styleUrl: './solution-calculator.component.scss',
})
export class SolutionCalculatorComponent {
  matrixCalculatorService = inject(MatrixCalculatorService);
  loggerService = inject(LoggerService);
  readonly dialog = inject(MatDialog);

  dataSource: OptimalGameRound[] = [];

  title = 'approximate-method';

  rows: number | null = null;
  columns: number | null = null;

  firstStrategy: number = 0;
  steps: number = 0;

  hasResult: boolean = false;
  loggerText: string = '';

  mathContent = `When $ a \\ne 0 $, there are two solutions to \\(ax^2 + bx + c = 0 \\) and they are
$$$ x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$$$`;

  openDialog() {
    this.dialog.open(AlertDialogComponent);
  }

  restartApplication() {
    this.rows = null;
    this.columns = null;

    this.firstStrategy = 0;
    this.steps = 0;

    this.hasResult = false;
    this.loggerText = '';

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
      this.loggerText = this.loggerService.getLogs();
    } else {
      this.openDialog();
    }
  }
}
