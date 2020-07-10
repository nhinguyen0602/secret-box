import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = environment.apiUrl + `/login`;
  errorData: {};
  constructor(
    private http: HttpClient,
  ) { }

  login(email: string, password: string) {
    // tslint:disable-next-line:object-literal-shorthand
    return this.http.post<any>(this.authUrl, {email: email, password: password}, {observe: 'response'})
    .pipe(map(res => {
      if (res.headers.get('Authorization') && res.body) {
        const headers = new Headers();
        headers.set('Authorization', res.headers.get('Authorization'));
        return res.body;
      }
    }),
    );
  }

}
