import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap, delay } from 'rxjs/operators';
import { LoggerService } from './logger.service';
import { User } from 'src/app/@shared/models/user';

@Injectable()
export class AuthService {
    constructor(
        private http: HttpClient,
        private loggerService: LoggerService
  ) {}

    login(account: string, password: string): Observable<any> {
    /*for (let i = 0; i < USERS.length; i++) {
      if (account === USERS[i].account && password === USERS[i].password) {
        let { userName, gender, phoneNumber, email } = USERS[i];
        let userInfo: User = { userName, gender, phoneNumber, email };
        return of(userInfo);
      }
      }*/
      const credentials = {'password': password, 'username': account};
      return this.http.post('/auth',credentials)
          .pipe(
              tap(_ => this.loggerService.log('auth')),
              //catchError(this.loggerService.log('failed auth'))
          )
    return throwError(
      'Please make sure you have input correct account and password'
    );
  }

  logout() {
    /*localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('userinfo');*/
      localStorage.removeItem('token');
  }

    setSession(token: string) {
    /*localStorage.setItem('id_token', '123456');
    localStorage.setItem('userinfo', JSON.stringify(userInfo));
    localStorage.setItem('expires_at', '120');*/
        localStorage.setItem('token', token);
  }

  isUserLoggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
