import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) { }

    public getProducts(): Observable<any>  {

      return this.http.get('https://angular-og.firebaseio.com/products.json');

      

       /* return [{
            description: '',
            imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
            ownerId: '',
            price: '',
            title: ''
          },
          {
            description: '',
            imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
            ownerId: '',
            price: '',
            title: ''
          },
          {
            description: '',
            imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
            ownerId: '',
            price: '',
            title: ''
          },
          {
            description: '',
            imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
            ownerId: '',
            price: '',
            title: ''
          }];*/
    }
    public addProduct(product: any): Observable<any> {
      return this.http.post('https://angular-og.firebaseio.com/products.json', product);
    }
    public deleteProduct(id: any): Observable<any> {
      return this.http.delete(`https://angular-og.firebaseio.com/products/${id}.json`);
    }

    public updateProduct(id: any, product: any): Observable<any> {
      return this.http.put(`https://angular-og.firebaseio.com/products/${id}.json`, product);
    }

}