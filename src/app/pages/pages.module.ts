import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [CalculatorComponent],
  imports: [CommonModule],
  exports: [CalculatorComponent],
})
export class PagesModule {}
