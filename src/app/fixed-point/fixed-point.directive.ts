import { Directive, Input, HostListener, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[fixedPoint]'
})
export class FixedPointDirective {

  constructor(
    private _el: ElementRef,
    private _control: NgControl
  ) {}

  @Input() fixedPoint: any;

  @HostListener('blur') formatDecimal() {
    this.setFixedPoint();
  }

  ngOnInit() {

    if (!this.fixedPoint) {
      this.fixedPoint = 2;
    }

    this.setFixedPoint();

  }

  setFixedPoint() {

    const val = this._el.nativeElement.value;
    const num = Number(val);

    this._control.control.setValue(num.toFixed(this.fixedPoint))

  }


}
