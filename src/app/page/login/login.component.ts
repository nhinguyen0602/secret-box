import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { CustomSnackbarService } from 'src/app/service/custom-snackbar.service';
import { Router } from '@angular/router';
import { RoleEnum } from 'src/app/role_enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackbarService: CustomSnackbarService,
    private router: Router
  ) { }

  loginForm: FormGroup;
  ngOnInit(): void {
    if (this.authService.isLoggedIn()){
      this.router.navigate(['users']);
    }
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  submitForm(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.email.value, this.password.value).subscribe(res => {
      localStorage.setItem('auth', res.headers.get('Authorization'));
      localStorage.setItem('currentUser', res.body.id);
      this.router.navigate(['users']);
      this.loginForm.reset();
    });
  }

}
