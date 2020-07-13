import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { CustomSnackbarService } from 'src/app/service/custom-snackbar.service';
import { Router } from '@angular/router';

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
      if (!res.role){
        this.snackbarService.warning('Access is not allowed', '403');
        this.router.navigate(['login']);
      }
      else{
        this.router.navigate(['users']);
        localStorage.setItem('currentUser', res.id);
      }
    });
    this.loginForm.reset();
  }

}
