import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-some-form',
  templateUrl: './some-form.component.html',
  styleUrls: ['./some-form.component.css'],
})
export class SomeFormComponent implements OnInit {

  form: FormGroup = this._fb.group({
    field1: [0],
    field2: [100],
    field3: [221],
    field4: [789],
    field5: [4444],
  });

  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  onSubmit(e: Event) {

    e.preventDefault();

    console.log(this.form.value);

  }

}
