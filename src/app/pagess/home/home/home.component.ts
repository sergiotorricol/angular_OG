import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products = [
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
    },
    {
      description: '',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      ownerId: '',
      price: '',
      title: ''
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}