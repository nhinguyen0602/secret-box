import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  public getStatistical(month: number, year: number): Observable<any[]> {
    if (month === -1) {
      return this.http.get<any[]>(`${this.url}?year=${year}`).pipe();
    }
    return this.http.get<any[]>(`${this.url}?month=${month + 1}&year=${year}`).pipe();
  }
}
