import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss'],
})
export class EmailFormComponent  implements OnInit {

  public form: FormGroup = new FormGroup({})
  
  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this._formBuilder.group({
      email: [
        '',
        [Validators.required,
        Validators.email]
      ]
    })
  }

  onSubmit(): void {
    console.log('valider email')
  }
}
