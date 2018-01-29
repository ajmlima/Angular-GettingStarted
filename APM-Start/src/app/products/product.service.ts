import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { IProduct } from "./product";


@Injectable()
export class ProductService {
    private _productUrl = './api/products/products.json';

    constructor(private _http: HttpClient) { }

    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl)
            .do(data => console.log("All " + JSON.stringify(data)))
            .catch(this.handleError);      
    }

    getProductById(id): Observable<IProduct> {
      return this._http.get<IProduct[]>(this._productUrl)
                       .map(response => {
                          return response.filter(prod => prod.productId === id)[0]
                        })
                       .do(response => console.log("This specific " + JSON.stringify(response)))
                       .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}
