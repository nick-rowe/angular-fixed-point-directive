import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeFormComponent } from './some-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FixedPointModule } from '../fixed-point/fixed-point.module';

@NgModule({
  declarations: [SomeFormComponent],
  exports: [SomeFormComponent],
  imports: [
    CommonModule,
    FixedPointModule,
    ReactiveFormsModule
  ]
})
export class SomeFormModule { }
