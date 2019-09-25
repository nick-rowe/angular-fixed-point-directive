import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixedPointDirective } from './fixed-point.directive';


@NgModule({
  declarations: [FixedPointDirective],
  exports: [FixedPointDirective],
  imports: [
    CommonModule
  ]
})
export class FixedPointModule { }
