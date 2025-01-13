import { Component, inject, Input, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

import { MatrixCalculatorService } from '../../data/services/matrix-calculator.service';

import { DimensionInputComponent } from '../dimension-input/dimension-input.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-matrix-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatInputModule,
    FormsModule,
    DimensionInputComponent,
  ],
  templateUrl: './matrix-table.component.html',
  styleUrl: './matrix-table.component.scss',
})
export class MatrixTableComponent {
  @Input() rows: number = 0;
  @Input() columns: number = 0;

  matrixCalculatorService = inject(MatrixCalculatorService);

  matrix = this.matrixCalculatorService.matrix;
  displayedColumns: string[] = [];
  tempMatrix: (number | null)[][] = [];

  getRows(): number[] {
    return Array.from({ length: this.rows }, (_, i) => i);
  }

  getColumns(): number[] {
    return Array.from({ length: this.columns }, (_, i) => i);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['rows'] || changes['columns']) {
      this.initializeMatrix();
    }
  }

  initializeMatrix() {
    this.tempMatrix = this.matrix().map((row) => [...row]);

    const newMatrix = Array.from({ length: this.rows }, () =>
      Array(this.columns).fill(0)
    );

    this.tempMatrix.forEach((row, i) => {
      if (i < newMatrix.length) {
        for (let j = 0; j < Math.min(this.columns, row.length); j++) {
          newMatrix[i][j] = row[j];
        }
      }
    });

    this.matrixCalculatorService.setMatrix(newMatrix);

    this.displayedColumns = this.getColumns().map((_, index) => 'col' + index);
  }
}
