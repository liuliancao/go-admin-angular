import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoggerService } from './logger.service';
import { App, AppEnv } from 'src/app/@shared/models/app';
import { Cluster } from 'src/app/@shared/models/cluster';
import { User } from 'src/app/@shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AppService {

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
    };

    getApps(): Observable<App[]> {
        return this.http.get<App[]>('/api/v1/apps', this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log('fetched services')),
                catchError(this.loggerService.handleError<App[]>('getServices',[]))
            );

    };
    getAppEnvs(): Observable<AppEnv[]> {
        return this.http.get<AppEnv[]>('/api/v1/appenvs', this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log('fetched appenvs')),
                catchError(this.loggerService.handleError<AppEnv[]>('getAppEnvs',[]))
            );

    };

    getApp(id: number): Observable<App> {
        return this.http.get<App>(`/api/v1/app/${id}`, this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log(`fetched app id=${id}`)),
                catchError(this.loggerService.handleError<App>(`get App id=${id}`))
            )
    };
    createApp(data): Observable<any> {
        return this.http.post<any>(`/api/v1/app`, data, this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log(`created app`)),
                catchError(this.loggerService.handleError<any>(`created app failed ${data}`))
            );
    }

    getAppClusters(id: number): Observable<Cluster[]> {
        return this.http.get<Cluster[]>(`/api/v1/clusters?a_id=${id}`, this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log(`get clusters of app id=${id}`))
            )
    };

    getAppUsers(id: number): Observable<User[]> {
        return this.http.get<User[]>(`/api/v1/appuser?a_id=${id}`, this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log(`get users of app id=${id}`))
            )
    };

    createAppUser(data): Observable<any> {
        return this.http.post<any>(`/api/v1/appuser`, data, this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log(`created app user`)),
                catchError(this.loggerService.handleError<any>(`created app user failed ${data}`))
            );
    }
    createAppCluster(data): Observable<any> {
        return this.http.post<any>(`/api/v1/appcluster`, data, this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log(`created app cluster`)),
                catchError(this.loggerService.handleError<any>(`created app cluster failed ${data}`))
            );
    }

    constructor(
        private loggerService: LoggerService,
        private http: HttpClient
    ) { }
}
