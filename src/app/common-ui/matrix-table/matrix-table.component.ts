import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-matrix-table',
  standalone: true,
  imports: [],
  templateUrl: './matrix-table.component.html',
  styleUrl: './matrix-table.component.scss',
})
export class MatrixTableComponent {
  @Input() matrix: number[][] = [];
  @Input() rows: number = 0;
  @Input() columns: number = 0;

  getRows(): number[] {
    return Array.from({ length: this.rows }, (_, i) => i);
  }

  getColumns(): number[] {
    return Array.from({ length: this.columns }, (_, i) => i);
  }
}
