import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MembershipLevel } from '../share/model/membership-level';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MembershipLevelService {

  private url = environment.apiUrl + `/membership_levels`;
  constructor(
    private http: HttpClient
  ) { }

  getAllMembershipLevel(): Observable<MembershipLevel[]>{
    return this.http.get<MembershipLevel[]>(this.url).pipe(
      map(res => res)
    );
  }

}
