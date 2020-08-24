import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:ordered-imports
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CustomSnackbarService } from 'src/app/services/custom-snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // tslint:disable-next-line:object-literal-sort-keys
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackbarService: CustomSnackbarService,
    private router: Router,
  ) { }

  public loginForm: FormGroup;
  public ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['users']);
    }
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  public submitForm(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.email.value, this.password.value).subscribe( (res) => {
      localStorage.setItem('auth', res.headers.get('Authorization'));
      localStorage.setItem('currentUser', res.body.id);
      this.router.navigate(['users']);
      this.loginForm.reset();
    });
  }

}
