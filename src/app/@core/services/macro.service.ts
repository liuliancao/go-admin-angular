import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoggerService } from './logger.service';
import { Macro } from 'src/app/@shared/models/macro';

@Injectable({
  providedIn: 'root'
})
export class MacroService {
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
    };
    // support namespace/m_type search
    getAllMacros(): Observable<Macro[]> {
        return this.http.get<Macro[]>('/api/v1/macros', this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log('fetched macros')),
                catchError(this.loggerService.handleError<Macro[]>('getMacros',[]))
            );
    };

    getMacros(namespace:string, m_type:string): Observable<Macro[]> {
        return this.http.get<Macro[]>('/api/v1/macros?namespace='+namespace+"&m_type="+m_type, this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log('fetched macros')),
                catchError(this.loggerService.handleError<Macro[]>('getMacros',[]))
            );
    };

    getMacro(id: number): Observable<Macro> {
        return this.http.get<Macro>(`/api/v1/macro/${id}`, this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log(`fetched macro id=${id}`)),
                catchError(this.loggerService.handleError<Macro>(`get Macro id=${id}`))
            );
    };
    createMacro(data): Observable<any>{
        return this.http.post<any>(`/api/v1/macro`, data, this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log(`created macro`)),
                catchError(this.loggerService.handleError<any>(`created product failed ${data}`))
            )
    }
    addOrUpdateMacro(data): Observable<any>{
        return this.http.post<any>(`/api/v1/macro/addorupdate`, data, this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log(`created macro`)),
                catchError(this.loggerService.handleError<any>(`created product failed ${data}`))
            )
    }

    constructor(
        private loggerService: LoggerService,
        private http: HttpClient
  ) { }
}
