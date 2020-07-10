import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import {Observable, throwError, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import { AlertService } from '../service/alert.service';
import { isArray } from 'util';
import { CodeError } from '../constant/error-code';
import { Router } from '@angular/router';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private alertService: AlertService,
    private router: Router
  ) {
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        let status = 0;
        let codeError = 0;
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {


          // server-side error
          status = error.status;
          if (status === 500) {
            errorMessage = 'Lỗi hệ thống';
          } else {
            if (isArray(error.error.errors)) {
              codeError = error.error.errors[0];
            } else {
              codeError = error.error.errors;
            }
          }
          this.handleCodeError(codeError);

        }
        return throwError(errorMessage);
      })
    );
  }

  handleCodeError(codeError: number) {
    switch (codeError) {
      case CodeError.TokenInvalid:
      case CodeError.TokenExpired:
        this.redirectToLogin();
        break;
      default:
        break;
    }
  }

  private redirectToLogin() {
    this.router.navigateByUrl('/login');
  }


}
