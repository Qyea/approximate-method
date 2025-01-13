import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { gameDescription } from './../../data/text/gameDescription';
import { gameInstruction } from './../../data/text/gameInstruction';

declare const MathJax: any;

@Component({
  selector: 'app-header-description',
  imports: [
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
  ],
  templateUrl: './header-description.component.html',
  styleUrl: './header-description.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderDescriptionComponent {
  description: string = gameDescription;
  instruction: string = gameInstruction;
}
