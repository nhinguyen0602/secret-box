import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public authUrl = environment.apiUrl + `/login`;
  constructor(
    public http: HttpClient,
    public jwtHelper: JwtHelperService,
    public router: Router,
  ) { }

  public login(email: string, password: string) {
    // tslint:disable-next-line:object-literal-shorthand
    return this.http.post<any>(this.authUrl, {email: email, password: password}, {observe: 'response'})
    .pipe(map((res) => {
      if (res.headers.get('Authorization') && res.body) {
        return res;
      }
    }),
    );
  }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem('auth');
  }

  public getAuthentication() {
    const currentUser = localStorage.getItem('auth');
    return currentUser;
  }

  public logout() {
    localStorage.clear();
    this.router.navigate([`login`]);
  }
}
