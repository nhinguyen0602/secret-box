import {Injectable, Injector} from '@angular/core';
// tslint:disable-next-line:ordered-imports
import {
  HttpEvent,
  // tslint:disable-next-line:ordered-imports
  HttpInterceptor,
  HttpHandler,
  // tslint:disable-next-line:trailing-comma
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {
  }

  public intercept(
    req: HttpRequest<any>,
    // tslint:disable-next-line:trailing-comma
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headersConfig = {
      Accept: 'application/json',
    };
    if (!req.headers.has('X-Skip-ContentType-Intercetor')) {
     headersConfig['Content-Type'] = 'application/json';
    }

    if (this.inWhiteList(req)) {
      return next.handle(req);
    }

    const token = this.auth.getAuthentication();

    if (token) {
      // tslint:disable-next-line:no-string-literal
      headersConfig['Authorization'] = token;
    }

    const request = req.clone({setHeaders: headersConfig});
    return next.handle(request);
  }

  private inWhiteList(req: HttpRequest<any>): boolean {
    const url = req.url;
    const whiteList = ['login', 'assets'];

    whiteList.forEach((allowURI) => {
      if (url.indexOf(allowURI) > -1) {
        return true;
      }
    });
    return false;
  }
}
