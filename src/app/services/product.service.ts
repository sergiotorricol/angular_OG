import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

    constructor(private hhtp: HttpClient) { }

    public getProducts(): Observable<any>  {

      return this.hhtp.get('https://angular-og.firebaseio.com/products.json');

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

}