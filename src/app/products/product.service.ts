import { Injectable } from "@angular/core";

import { IProduct } from "../model/product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";


@Injectable(
    {providedIn: 'root'}
    ) 

export class ProductService {
    //private productsUrl = '//5d55227136ad770014ccdd58.mockapi.io/api/v1/products';
    private productUrl = 'api/products/products.json';

    constructor(private http: HttpClient) {}

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log('All: '+ JSON.stringify(data))),  //showing the data on the console
            catchError(this.handleError)
        );     
    }

    getProductById(id: number): Observable<IProduct | undefined> {
        return this.getProducts().pipe(
          map((products: IProduct[]) => products.find(p => p.productId === id))
        );
      }

    handleError(err: HttpErrorResponse) {
        //in a real world app, we may send the server to some remote logging infrastructure
        //instead of logging it to the console
        let errorMessage = '';
        if(err.error instanceof ErrorEvent) {
            //representing client-side or network error occured. Handle it accordingly.
            errorMessage = `An error occured: ${err.error.message}`;
        }else {
            //The backend returned an unsuccessful response.
            //The response body may contain clue to what went wrong.
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}