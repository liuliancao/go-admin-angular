import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoggerService } from './logger.service';
import { Resource, ResourceType } from 'src/app/@shared/models/resource';



@Injectable({
  providedIn: 'root'
})
export class ResourceService {

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
    };

    constructor(
        private loggerService: LoggerService,
        private http: HttpClient,
    ) { }

    createResourceType(data): Observable<any> {
        return this.http.post<any>(`/api/v1/resourcetype`, data, this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log(`created resource type`)),
                catchError(this.loggerService.handleError<any>(`created resource type failed ${data}`))
            );
    }

    createResource(data): Observable<any> {
        return this.http.post<any>(`/api/v1/resource`, data, this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log(`created resource`)),
                catchError(this.loggerService.handleError<any>(`created resource failed ${data}`))
            );
    }

    getResourceTypes(): Observable<ResourceType[]> {
        return this.http.get<ResourceType[]>('/api/v1/resourcetypes', this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log('fetched resourcetypes')),
                catchError(this.loggerService.handleError<ResourceType[]>('getResourceTypes',[]))
            );
    };

    getResources(): Observable<Resource[]> {
        return this.http.get<Resource[]>('/api/v1/resources', this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log('fetched resources')),
                catchError(this.loggerService.handleError<Resource[]>('getResources',[]))
            );
    };


}
