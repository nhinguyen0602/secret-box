import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { UsersService } from 'src/app/service/users.service';
import { User } from 'src/app/share/model/user';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  // tslint:disable-next-line:object-literal-sort-keys
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

  constructor(
    private userService: UsersService,
    private dialog: MatDialog,
    private router: Router,
    private authService: AuthService,
  ) { }

  public users: User[];
  public searchText: string;

  public ngOnInit(): void {
    this.getAllUser();
    this.userService.changeUsers.subscribe(() => {
      this.getAllUser();
    });
  }

  private getAllUser() {
    if (this.authService.isLoggedIn()) {
      this.userService.getAllUser().subscribe((users) => this.users = users);
    } else {
      this.router.navigate(['/login']);
    }
  }

  public openDialogUserDetail(id: number) {
    const dialogRef = this.dialog.open(UserDetailComponent, {
      data: { name: id },
    });
  }
}
