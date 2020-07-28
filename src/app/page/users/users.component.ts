import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/share/model/user';
import { UsersService } from 'src/app/service/users.service';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private userService: UsersService,
    private dialog: MatDialog,
    private router: Router,
    private authService: AuthService
  ) { }

  public users: User[];
  displayedColumns: string[] = ['id', 'email', 'member', 'edit', 'delete'];

  ngOnInit(): void {
    this.getAllUser();
    this.userService.changeUsers.subscribe(() => {
      this.getAllUser();
    });
  }

  private getAllUser(){
    if (this.authService.isLoggedIn()){
      this.userService.getAllUser().subscribe(users => this.users = users);
    } else{
      this.router.navigate(['/login']);
    }
  }

  openDialogUserDetail(id: number) {
    const dialogRef = this.dialog.open(UserDetailComponent, {
      data: {name: id}
    });
  }
}
