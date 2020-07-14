import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secret-box';

  constructor(
    private router: Router
  ){}

  public isLogin(){
    return !!localStorage.getItem('currentUser');
  }

  public logout(){
    localStorage.removeItem('currentUser');
    this.router.navigate([`login`]);
  }
}
