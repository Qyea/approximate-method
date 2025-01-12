import { Routes } from '@angular/router';
import { LayoutComponent } from './common-ui/layout/layout.component';
import { SolutionCalculatorComponent } from './pages/solution-calculator/solution-calculator.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'calculator', pathMatch: 'full' },
      { path: 'calculator', component: SolutionCalculatorComponent },
    ],
  },
];
