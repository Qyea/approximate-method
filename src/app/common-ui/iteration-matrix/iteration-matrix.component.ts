import { Component, computed, Input, Signal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { OptimalGameRound } from '../../data/interfaces/optimal-game-round';
import { transformGameRoundToTableRow } from '../../helpers/table-helpers';

@Component({
  selector: 'app-iteration-matrix',
  imports: [MatTableModule],
  templateUrl: './iteration-matrix.component.html',
  styleUrl: './iteration-matrix.component.scss',
})
export class IterationMatrixComponent {
  @Input() data: OptimalGameRound[] = [];

  transformFunction = transformGameRoundToTableRow;

  dataSource: Signal<Record<string, number>[]> = computed(() =>
    this.data.length > 0
      ? this.data.map((round) => transformGameRoundToTableRow(round))
      : []
  );

  displayedColumns: Signal<string[]> = computed(() =>
    this.dataSource().length > 0 ? Object.keys(this.dataSource()[0]) : []
  );
}
