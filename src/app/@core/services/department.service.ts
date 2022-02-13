import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Department } from 'src/app/@shared/models/department';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

    constructor(
        private http: HttpClient,
        private loggerService: LoggerService,
    ) { }

    getDepartments(): Observable<Department[]> {
        return this.http.get<Department[]>('/api/v1/departments')
            .pipe(
                tap(_ => this.loggerService.log('fetched departments')),
                catchError(this.loggerService.handleError<Department[]>('getDepartments',[]))
            );
    };
    createDepartment(data): Observable<any>{
        return this.http.post<any>(`/api/v1/department`, data)
            .pipe(
                tap(_ => this.loggerService.log(`created department`)),
                catchError(this.loggerService.handleError<any>(`created product failed ${data}`))
            )
    }

}
