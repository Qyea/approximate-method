import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dimension-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dimension-input.component.html',
  styleUrl: './dimension-input.component.scss',
})
export class DimensionInputComponent {
  title: string = 'hello';
}
