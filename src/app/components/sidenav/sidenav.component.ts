import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  // tslint:disable-next-line:object-literal-sort-keys
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {

  public sidebarMinimized = false;
  public navItems = navItems;

  public toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  constructor(
    private authService: AuthService,
  ) { }

  public ngOnInit(): void {
  }

  public isLogin() {
    return this.authService.isLoggedIn();
  }

  public logout() {
    this.authService.logout();
  }

}
