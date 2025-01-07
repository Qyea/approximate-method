import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MatrixCalculatorService {
  calculateResult(rows: number, columns: number): number {
    return columns + rows;
  }
}
