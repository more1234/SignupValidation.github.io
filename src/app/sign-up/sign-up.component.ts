import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers:[FormBuilder]
})
export class SignUpComponent {

  private form : FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
      'username' : ['', Validators.required],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      'email' : ['', Validators.required],
      'contact' : ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
      'gender' : ['', Validators.required],
      'birth' : ['', Validators.required],
    
    })
  }
    submitForm(value: any){
      console.log(value);
    }
}