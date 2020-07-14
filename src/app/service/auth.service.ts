import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = environment.apiUrl + `/login`;
  errorData: {};
  constructor(
    private http: HttpClient,
    public jwtHelper: JwtHelperService,
  ) { }

  login(email: string, password: string) {
    // tslint:disable-next-line:object-literal-shorthand
    return this.http.post<any>(this.authUrl, {email: email, password: password}, {observe: 'response'})
    .pipe(map(res => {
      if (res.headers.get('Authorization') && res.body) {
        localStorage.setItem('auth', res.headers.get('Authorization'));
        return res.body;
      }
    }),
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('auth');
  }

  getAuthentication() {
    const currentUser = localStorage.getItem('auth');
    return currentUser;
  }

}
