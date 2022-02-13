import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class OpInterceptor implements HttpInterceptor {

    constructor(private router: Router) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');
        const request = req.clone({headers: req.headers.append('Authorization', 'Bearer ' + token)});
        return next.handle(request)
            .pipe(
                catchError(error => {
                    switch(error.status) {
                        case 401:
                            console.log("unauthorized");
                            this.router.navigateByUrl("/login");
                            break;
                        case 403:
                            console.log("403 forbidden");
                            break;
                        case 200:
                            console.log("ok");
                            break;
                        default:
                            return throwError(error);
                    }
                }),
                //retry(2)
            );
    }
}

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: OpInterceptor, multi: true },
]
