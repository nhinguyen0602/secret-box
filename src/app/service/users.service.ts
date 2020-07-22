import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from '../share/model/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private userUrl = environment.apiUrl + `/users`;
  public changeUsers = new Subject<any>();
  constructor(
    private http: HttpClient,
  ) { }

  getAllUser(): Observable<User[]>{
    return this.http.get<User[]>(this.userUrl).pipe(
      map(res => res)
    );
  }

  getUserDetail(id: number): Observable<User>{
    return this.http.get<User>(`${this.userUrl}/${id}`).pipe(
      map(res => res)
    );
  }

  updateMembershipLevel(idUser: number, idlevel: number): Observable<boolean>{
    return this.http.put<boolean>(`${this.userUrl}/${idUser}?membership_level=${idlevel}`, null).pipe(
      map(res => res)
    );
  }

}
