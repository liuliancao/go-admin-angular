import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoggerService } from './logger.service';
import { HostDeploy } from 'src/app/@shared/models/deploy';

@Injectable({
  providedIn: 'root'
})
export class DeployService {
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
    };

    constructor(
        private loggerService: LoggerService,
        private http: HttpClient
    ) { }

    createHostDeploy(data): Observable<any> {
        return this.http.post<any>(`/api/v1/host/deploy`, data, this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log(`created host deploy`)),
                catchError(this.loggerService.handleError<any>(`created host deploy failed ${data}`))
            );
    }
    getHostDeploys(a_id: number): Observable<HostDeploy> {
        return this.http.get<HostDeploy>(`/api/v1/host/deploys?a_id=`+a_id, this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log(`fetched host deploys a_id=${a_id}`)),
                catchError(this.loggerService.handleError<HostDeploy>(`get host deploys a_id=${a_id}`))
            )
    };

}
