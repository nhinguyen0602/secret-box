import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/share/model/user';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private userService: UsersService
  ) { }

  public users: User[];
  displayedColumns: string[] = ['id', 'email', 'edit', 'delete'];

  ngOnInit(): void {
    this.getAllUser();
  }

  private getAllUser(){
    this.userService.getAllUser().subscribe(users => this.users = users);
  }

}
