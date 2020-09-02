import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  products = [
   /* {
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
    }*/
  ];
  productSubs: Subscription;
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.productSubs = this.productService.getProducts().subscribe(res => {
     console.log('RESPUESTA: ', res);
     console.log('RESPUESTA: ', Object.entries(res));
     Object.entries(res).map(p => this.products.push(p[1]));
   });
  }
  ngOnDestroy(): void {
    //this.productSubs.unsubscribe();
    this.productSubs ? this.productSubs.unsubscribe() : '';
  }

}