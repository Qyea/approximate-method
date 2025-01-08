import { Component, inject } from '@angular/core';
import { MatrixTableComponent } from './common-ui/matrix-table/matrix-table.component';
import { DimensionInputComponent } from './common-ui/dimension-input/dimension-input.component';
import { MatrixCalculatorService } from './data/services/matrix-calculator.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [MatrixTableComponent, DimensionInputComponent, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'approximate-method';
  rows: number | null = null;
  columns: number | null = null;

  firstStrategy: number = 0;
  steps: number = 0;

  hasResult: boolean = false;

  matrixCalculatorService = inject(MatrixCalculatorService);

  getResult() {
    const n = Number(this.rows);
    const m = Number(this.columns);

    const firstStrategy = Number(this.firstStrategy);
    const steps = Number(this.steps);

    if (n && m) {
      console.log(
        this.matrixCalculatorService.calculateResult(n, m, firstStrategy, steps)
      );
    } else {
      alert('Enter proper inputs');
    }
  }
}
