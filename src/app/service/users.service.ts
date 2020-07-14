import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../share/model/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private userUrl = environment.apiUrl + `/users`;

  constructor(
    private http: HttpClient
  ) { }

  getAllUser(): Observable<User[]>{
    return this.http.get<User[]>(this.userUrl).pipe(
      map(res => res)
    );
  }

}
