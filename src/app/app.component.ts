import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // tslint:disable-next-line:object-literal-sort-keys
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'secret-box';

  constructor(
    private authService: AuthService,
  ) {}

  public isLogin() {
    return this.authService.isLoggedIn();
  }

}
