import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  loginForm: FormGroup;
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  getErrorMessage() {
    if (this.loginForm.get('email').hasError('required')) {
      return 'You must enter a value';
    }

    // return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
