import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

import { TuiAccordion } from '@taiga-ui/kit';

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
    TuiAccordion,
  ],
  templateUrl: './header-description.component.html',
  styleUrl: './header-description.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderDescriptionComponent {
  description: string = gameDescription;
  instruction: string = gameInstruction;

  @ViewChild('accordion') accordion!: ElementRef;

  onContentLoaded() {
    setTimeout(() => MathJax.typesetPromise(), 0);
  }

  onAccordionChange() {
    const isOpen = this.accordion.nativeElement.open;

    console.log(isOpen);

    if (isOpen) {
      setTimeout(() => MathJax.typesetPromise(), 0);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['description']) {
      MathJax.typesetPromise();
    }
  }
}
