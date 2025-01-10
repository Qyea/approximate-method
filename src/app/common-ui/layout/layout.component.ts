import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderDescriptionComponent } from '../header-description/header-description.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, HeaderDescriptionComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
