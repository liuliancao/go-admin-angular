import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
    log(message: string) {
        console.log(message);
    }
    handleError<T>(operation = 'operation', result?:T) {
        return (error: any): Observable<T> => {
            console.error(error);
            this.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        }
    }
    constructor() { }
}
