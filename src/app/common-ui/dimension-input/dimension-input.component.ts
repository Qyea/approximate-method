import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() label: string = '';
  @Input() value: number | null = null;
  @Output() valueChange = new EventEmitter<string>();
  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const newValue = inputElement.value;
    this.value = Number(newValue);
    this.valueChange.emit(newValue);
  }
}
