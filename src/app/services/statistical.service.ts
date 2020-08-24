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

  public getStatistical(month: number, year: number, type: string): Observable<any[]> {
    if (type === 'year') {
      return this.http.get<any[]>(this.url).pipe();
    } else if (type === 'month') {
      return this.http.get<any[]>(`${this.url}?year=${year}`).pipe();
    } else {
    return this.http.get<any[]>(`${this.url}?month=${month + 1}&year=${year}`).pipe();
    }
  }
}
