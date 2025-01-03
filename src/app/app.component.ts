import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatrixTableComponent } from './common-ui/matrix-table/matrix-table.component';
import { DimensionInputComponent } from './common-ui/dimension-input/dimension-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatrixTableComponent, DimensionInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'approximate-method';
}
