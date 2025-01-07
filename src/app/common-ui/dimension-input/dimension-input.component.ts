import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-dimension-input',
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  standalone: true,
  templateUrl: './dimension-input.component.html',
  styleUrl: './dimension-input.component.scss',
})
export class DimensionInputComponent {
  @Input() label: string = '';
  @Input() value: number | null = null;
  @Output() valueChange = new EventEmitter<number>();
  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const newValue = Number(inputElement.value);
    this.value = newValue;
    this.valueChange.emit(newValue);
  }
}
