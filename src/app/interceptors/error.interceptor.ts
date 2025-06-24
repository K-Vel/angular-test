import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error) => {
      if (error.status === 500) {
        console.error('Помилка сервера!');
      } else {
        console.error(`Помилка ${error.status}: ${error.message}`);
      }

      return throwError(() => error);
    })
  );
};
