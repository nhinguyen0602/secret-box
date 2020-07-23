import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/share/model/user';
import { UsersService } from 'src/app/service/users.service';
import { FileService } from 'src/app/service/file.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private fileService: FileService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UsersService
    ) { }

    public user: User;
    public dataUsed: number;

  ngOnInit(): void {
    this.getUserDetail();
    this.getFileOfUser();
  }

  getUserDetail(){
    this.userService.getUserDetail(this.data.name).subscribe(user => this.user = user);
  }

  getFileOfUser(){
    this.fileService.getFileOfUser(this.data.name).subscribe(files => {
      let rs = 0;
      for (const val of files) {
        rs += val.size;
    }
      this.dataUsed = rs / 1000 / this.user.membership_level.limit_storage_gigabytes * 100;
    });
  }

}
