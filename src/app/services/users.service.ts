import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { User } from '../share/model/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  public userUrl = environment.apiUrl + `/users`;
  public changeUsers = new Subject<any>();
  constructor(
    public http: HttpClient,
  ) { }

  public getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl).pipe(
      map((res) => res),
    );
  }

  public getUserDetail(id: number): Observable<User> {
    return this.http.get<User>(`${this.userUrl}/${id}`).pipe(
      map((res) => res),
    );
  }

  public updateMembershipLevel(idUser: number, idlevel: number): Observable<User> {
    return this.http.put<User>(`${this.userUrl}/${idUser}?membership_level=${idlevel}`, null).pipe(
      map((res) => res),
    );
  }

}
