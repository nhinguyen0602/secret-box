import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { Notification } from '../share/model/notification';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  public notificationUrl = environment.apiUrl;
  constructor(
    public http: HttpClient,
  ) { }

  public getAllNotification(): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.notificationUrl}/notifications`).pipe(
      map((res) => res),
    );
  }
}
