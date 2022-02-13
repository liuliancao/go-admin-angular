import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, tap, delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Host } from '../../@shared/models/host';
import { Pager } from '../../@shared/models/pager';
import { PagerService } from './pager.service';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class HostService {

    private baseUrl = environment.opBackendUrl;

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
    };

    getHosts(pager: Pager, keyword: string): Observable<Host[]> {
        return this.http.get<Host[]>('/api/v1/hosts?pagesize='+pager.size+'&pagenum='+pager.index+'&key='+keyword, this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log('fetched hosts')),
                catchError(this.loggerService.handleError<Host[]>('getHosts',[]))
            );
    };
    getAppHosts(aid: number): Observable<Host[]> {
        return this.http.get<Host[]>('/api/v1/hosts?aid='+aid, this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log('fetched app hosts')),
                catchError(this.loggerService.handleError<Host[]>('getAppHosts',[]))
            );
    };

    getAllHosts(): Observable<Host[]> {
        return this.http.get<Host[]>('/api/v1/hosts', this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log('fetched  all hosts')),
                catchError(this.loggerService.handleError<Host[]>('get all Hosts',[]))
            );
    };

    constructor(
        private http: HttpClient,
        private pagerService: PagerService,
        private loggerService: LoggerService
    ) {
    }
}
