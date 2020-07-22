import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileService } from 'src/app/service/file.service';

@Component({
  selector: 'app-membership-level',
  templateUrl: './membership-level.component.html',
  styleUrls: ['./membership-level.component.css']
})
export class MembershipLevelComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private fileService: FileService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  ngOnInit(): void {
  }

}
