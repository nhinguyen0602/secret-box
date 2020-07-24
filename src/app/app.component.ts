import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secret-box';

  constructor(
    private router: Router,
    private authService: AuthService
  ){}

  public isLogin(){
    return this.authService.isLoggedIn();
  }

  public logout(){
    this.authService.logout();
  }
}
