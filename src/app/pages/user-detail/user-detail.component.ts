import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/shared/model/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  // tslint:disable-next-line:object-literal-sort-keys
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UsersService,
    ) { }

    public user: User;
    public dataUsed: number;
    public isLoading = true;

  public ngOnInit(): void {
    this.getUserDetail();
  }

  public getUserDetail() {
    this.userService.getUserDetail(this.data.name).subscribe((user) => {
      this.user = user;
      this.dataUsed = user.total_size_files / 1000 / this.user.membership_level.limit_storage_gigabytes * 100;
      this.isLoading = false;
    });
  }

}
