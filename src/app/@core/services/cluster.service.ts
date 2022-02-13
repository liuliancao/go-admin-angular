import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoggerService } from './logger.service';
import { Cluster } from 'src/app/@shared/models/cluster';
import { Host } from 'src/app/@shared/models/host';
import { User } from 'src/app/@shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class ClusterService {

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
    };

    getClusters(): Observable<Cluster[]> {
        return this.http.get<Cluster[]>('/api/v1/clusters', this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log('fetched clusters')),
                catchError(this.loggerService.handleError<Cluster[]>('getClusters',[]))
            );
    };

    getCluster(id: number): Observable<Cluster> {
        return this.http.get<Cluster>(`/api/v1/cluster/${id}`, this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log(`fetched cluster id=${id}`)),
                catchError(this.loggerService.handleError<Cluster>(`get Cluster id=${id}`))
            );
    };

    getClusterHosts(id: number): Observable<Host[]> {
        return this.http.get<Host[]>(`/api/v1/hosts?cid=${id}`, this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log(`get hosts of cluster id=${id}`))
            )
    };

    createCluster(data): Observable<any>{
        return this.http.post<any>(`/api/v1/cluster`, data, this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log(`created cluster`)),
                catchError(this.loggerService.handleError<any>(`created product failed ${data}`))
            )
    }
    getClusterUsers(id: number): Observable<User[]> {
        return this.http.get<User[]>(`/api/v1/clusteruser?c_id=${id}`, this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log(`get users of cluster id=${id}`))
            )
    };

    createClusterUser(data): Observable<any> {
        return this.http.post<any>(`/api/v1/clusteruser`, data, this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log(`created cluster user`)),
                catchError(this.loggerService.handleError<any>(`created cluster user failed ${data}`))
            );
    }
    createClusterHost(data): Observable<any> {
        return this.http.post<any>(`/api/v1/cluster/host`, data, this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log(`created cluster host`)),
                catchError(this.loggerService.handleError<any>(`created cluster host failed ${data}`))
            );
    }

    constructor(private loggerService: LoggerService, private http: HttpClient) { }
}
