import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product } from '../models/product.interface';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  private url = "https://dummyjson.com/products";
  productsSub = new Observable<number>();
    productsCounter = 0;
  constructor(private http: HttpClient) { 
  }
  getAllProducts():Observable<Product[]> {
    return this.http.get<Product[]>(this.url).pipe(
      catchError((err) => {
          return throwError(this.getErrorMessage(err.status));
      })
    )
  }

//   addFavorites() {
//     this.productsCounter++;
//     this.productsSub.next(this.productsCounter);
// }


  getErrorMessage(status: number) {
    let message = '';
    switch (status) {
        case 404:
            message = 'Elementi non trovati';
            break;

        default:
            message = 'Qualcosa non ha funzionato nella chiamata';
            break;
    }
    return message;
}
}
