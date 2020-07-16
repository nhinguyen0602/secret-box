import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/share/model/user';
import { UsersService } from 'src/app/service/users.service';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private userService: UsersService,
    private dialog: MatDialog
  ) { }

  public users: User[];
  displayedColumns: string[] = ['id', 'email', 'edit', 'delete'];

  ngOnInit(): void {
    this.getAllUser();
  }

  private getAllUser(){
    this.userService.getAllUser().subscribe(users => this.users = users);
  }

  openDialog(id: number) {
    const dialogRef = this.dialog.open(UserDetailComponent, {
      data: {name: id}
    });
  }
}
