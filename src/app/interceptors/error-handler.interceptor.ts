import {
  HttpErrorResponse,
  // tslint:disable-next-line:ordered-imports
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CustomSnackbarService } from '../services/custom-snackbar.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    public snackbarService: CustomSnackbarService,
  ) {
  }

  public intercept(
    request: HttpRequest<any>,
    // tslint:disable-next-line:trailing-comma
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        let status = 0;
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          status = error.error.error.status;
          if (status === 500) {
            errorMessage = 'System Error';
          } else {
            errorMessage = error.error.error.detail;
          }
        }
        this.snackbarService.warning(errorMessage, status);
        return throwError(errorMessage);
      // tslint:disable-next-line:trailing-comma
      })
    );
  }

}
