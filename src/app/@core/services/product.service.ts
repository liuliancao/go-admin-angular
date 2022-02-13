import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoggerService } from './logger.service';
import { Product } from 'src/app/@shared/models/product';
import { User } from 'src/app/@shared/models/user';
import { App } from 'src/app/@shared/models/app';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
    };

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>('/api/v1/products', this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log('fetched products')),
                catchError(this.loggerService.handleError<Product[]>('getProducts',[]))
            );
    };

    getProduct(id: number): Observable<Product> {
        return this.http.get<Product>(`/api/v1/product/${id}`, this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log(`fetched product id=${id}`)),
                catchError(this.loggerService.handleError<Product>(`get Product id=${id}`))
            );
    };

    createProduct(data): Observable<any> {
        return this.http.post<any>(`/api/v1/product`, data, this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log(`created product`)),
                catchError(this.loggerService.handleError<any>(`created product failed ${data}`))
            );
    }
    createProductUser(data): Observable<any> {
        return this.http.post<any>(`/api/v1/productuser`, data, this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log(`created product user`)),
                catchError(this.loggerService.handleError<any>(`created product user failed ${data}`))
            );
    }
     getProductApps(id: number): Observable<App[]> {
        return this.http.get<App[]>(`/api/v1/apps?pid=${id}`, this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log(`get apps of product id=${id}`)),
            )
    }
    getProductUsers(id: number): Observable<User[]> {
        return this.http.get<User[]>(`/api/v1/productuser?p_id=${id}`, this.httpOptions)
            .pipe(
                tap(_ => this.loggerService.log(`get users of product id=${id}`)),
            )
    }
    constructor(private loggerService: LoggerService, private http: HttpClient) { }
}
