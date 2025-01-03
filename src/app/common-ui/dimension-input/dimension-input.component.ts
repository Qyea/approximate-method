import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-dimension-input',
  standalone: true,
  imports: [InputNumberModule, FormsModule, CommonModule],
  templateUrl: './dimension-input.component.html',
  styleUrl: './dimension-input.component.scss',
})
export class DimensionInputComponent {
  dementionN: number = 42723;
  dementionM: number = 42723;
}
