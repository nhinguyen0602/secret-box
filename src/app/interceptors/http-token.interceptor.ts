import {Injectable, Injector} from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headersConfig = {
      Accept: 'application/json'
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

  inWhiteList(req: HttpRequest<any>): boolean {
    const url = req.url;
    const whiteList = ['login', 'assets'];

    whiteList.forEach(allowURI => {
      if (url.indexOf(allowURI) > -1) {
        return true;
      }
    });
    return false;
  }
}
