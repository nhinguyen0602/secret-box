import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NewNotificationComponent } from 'src/app/component/new-notification/new-notification.component';
import { NotificationService } from 'src/app/service/notification.service';
import { Notification } from 'src/app/share/model/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  // tslint:disable-next-line:object-literal-sort-keys
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, {static: true}) public paginator: MatPaginator;

  constructor(
    private notificationService: NotificationService,
    // tslint:disable-next-line:variable-name
    private _bottomSheet: MatBottomSheet,
  ) {
    this.dataSource = new MatTableDataSource(this.notifications);
   }

  public notifications: Notification[];
  public displayedColumns = ['content', 'created_at', 'updated_at'];
  public dataSource: MatTableDataSource<Notification>;

  public ngOnInit() {
    this.getAllNotification();
  }

  public getAllNotification() {
    this.notificationService.getAllNotification().subscribe((noti) => {
      this.notifications = noti;
      this.dataSource.data = this.notifications;
    });
  }

  public ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  public openBottomSheet(): void {
    this._bottomSheet.open(NewNotificationComponent);
  }

}
