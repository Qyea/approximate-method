import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatrixTableComponent } from './common-ui/matrix-table/matrix-table.component';
import { DimensionInputComponent } from './common-ui/dimension-input/dimension-input.component';
import { MatrixCalculatorService } from './data/services/matrix-calculator.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatrixTableComponent, DimensionInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'approximate-method';
  rows: number | null = null;

  columns: number | null = null;
  hasResult: boolean = false;

  matrixCalculatorService = inject(MatrixCalculatorService);

  getResult() {
    const n = Number(this.rows);
    const m = Number(this.columns);

    if (n && m) {
      console.log(this.matrixCalculatorService.calculateResult(n, m));
    } else {
      alert('Enter proper inputs');
    }
  }
}
