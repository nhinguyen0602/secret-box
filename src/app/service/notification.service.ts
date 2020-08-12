import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  public notificationUrl = environment.apiUrl;
  constructor(
    public http: HttpClient,
  ) { }

  public getAllNotification(): Observable<any[]> {
    return this.http.get<any[]>(this.notificationUrl).pipe(
      map((res) => res),
    );
  }
}
