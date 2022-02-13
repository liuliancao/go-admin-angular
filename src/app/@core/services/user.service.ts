import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoggerService } from './logger.service';
import { User } from 'src/app/@shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
    };

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>('/api/v1/users', this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log('fetched users')),
                catchError(this.loggerService.handleError<User[]>('getUsers', []))
            );
    };
    createUser(data): Observable<any>{
        return this.http.post<any>(`/api/v1/user`, data, this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log(`created user`)),
                catchError(this.loggerService.handleError<any>(`created user failed ${data}`))
            )
    }
    constructor(
        private loggerService: LoggerService,
        private http: HttpClient
  ) { }
}
