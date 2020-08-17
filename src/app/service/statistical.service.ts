import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'lodash-es';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root',
})
export class StatisticalService {
  private url = environment.apiUrl + `/subscription_orders`;

  constructor(
    private http: HttpClient,
  ) { }

  public getStatistical(month: number, year: number) {
    return this.http.get<any>(`${this.url}?month=${month}&year=${year}`).pipe();
  }
}
