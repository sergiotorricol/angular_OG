import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

    constructor() { }

    public getProducts(): any[] {
        return [{
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
          }];
    }

}