import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CustomSnackbarService } from '../service/custom-snackbar.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    public snackbarService: CustomSnackbarService,
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
      })
    );
  }

}
