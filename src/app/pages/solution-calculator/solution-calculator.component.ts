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
import { OptimalGameRound } from '../../data/interfaces/optimal-game-round.interface';

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
  calculationResults: OptimalGameRound[] = [];
  title = 'approximate-method';

  numberOfRows: number | null = null;
  numberOfColumns: number | null = null;
  startingStrategy: number = 0;
  iterationSteps: number = 0;

  isResultAvailable: boolean = false;
  logMessages: string = '';

  constructor(
    private matrixCalculatorService: MatrixCalculatorService,
    private loggerService: LoggerService,
    private dialog: MatDialog
  ) {}

  private validateInputs(): boolean {
    return !!this.numberOfRows && !!this.numberOfColumns;
  }

  private openDialogWithConfig(
    title: string,
    message: string,
    hasMath = false
  ): void {
    this.dialog.open(AlertDialogComponent, {
      data: { title, message, hasMath },
    });
  }

  openDialog(): void {
    this.openDialogWithConfig(
      'Incorrect values!',
      'Please enter the correct number of clean strategies of the first and second player.'
    );
  }
  openLogs(): void {
    this.openDialogWithConfig('Logs', this.logMessages, true);
  }

  restartApplication(): void {
    this.numberOfRows = null;
    this.numberOfColumns = null;

    this.startingStrategy = 0;
    this.iterationSteps = 0;

    this.isResultAvailable = false;
    this.logMessages = '';

    this.matrixCalculatorService.resetMatrix();
  }

  getResult(): void {
    const n = Number(this.numberOfRows);
    const m = Number(this.numberOfColumns);

    const firstStrategy = Number(this.startingStrategy);
    const steps = Number(this.iterationSteps);

    if (this.validateInputs()) {
      const gameResultsTable = this.matrixCalculatorService.calculateResult(
        n,
        m,
        firstStrategy,
        steps
      );

      this.calculationResults = gameResultsTable;
      this.isResultAvailable = true;
      this.logMessages = this.loggerService.getLogs();
    } else {
      this.openDialog();
    }
  }
}
