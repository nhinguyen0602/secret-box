import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { MembershipLevel } from '../share/model/membership-level';

@Injectable({
  providedIn: 'root',
})
export class MembershipLevelService {

  public url = environment.apiUrl + `/membership_levels`;
  constructor(
    public http: HttpClient,
  ) { }

  public getAllMembershipLevel(): Observable<MembershipLevel[]> {
    return this.http.get<MembershipLevel[]>(this.url).pipe(
      map((res) => res),
    );
  }

}
