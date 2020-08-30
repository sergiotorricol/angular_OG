import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {

   this.products = this.productService.getProducts();

  }

}