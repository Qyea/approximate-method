import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
];

@Component({
  selector: 'app-matrix-table',
  standalone: true,
  imports: [MatTableModule, MatInputModule, FormsModule],
  templateUrl: './matrix-table.component.html',
  styleUrl: './matrix-table.component.scss',
})
export class MatrixTableComponent {
  @Input() matrix: number[][] = [];
  @Input() rows: number = 0;
  @Input() columns: number = 0;

  displayedColumns: string[] = [];

  dataSource = ELEMENT_DATA;

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
    this.matrix = Array.from({ length: this.rows }, () =>
      Array(this.columns).fill(0)
    );

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.matrix[i][j] = 0;
      }
    }

    this.displayedColumns = this.getColumns().map((_, index) => 'col' + index);
  }
}
