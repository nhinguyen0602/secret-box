import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private url = environment.apiUrl + `/users`;

  constructor(
    private http: HttpClient
  ) { }

  getFileOfUser(userId: number): Observable<File[]>{
    return this.http.get<File[]>(`${this.url}/${userId}/files`).pipe(
      map(res => res)
    );
  }
}
