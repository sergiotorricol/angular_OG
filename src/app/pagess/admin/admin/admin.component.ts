import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../../services/product.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {

  products=[];
  productForm: FormGroup;
  productSubs: Subscription;
  productGetSubs: Subscription;

  // nameControl = new FormControl();

  constructor(private formBuilder: FormBuilder,
    private productService: ProductService) {
      /*this.productGetSubs = this.productService.getProducts().subscribe(res => {

        // [1,2,3,4,5,6];
        // {{key:1 },{key: 2},{key: 1},{key: 1},{key: 1},{key: 1},{key: 1}}
        // Object.entries(res) [ [key, 1], [key, 2] , .......              ];
  
        console.log('RESPUESTA: ', res);
        console.log('RESPUESTA: ', Object.entries(res));
  
        Object.entries(res).map(p => this.products.push(p[1]));
  
      });*/
}

  ngOnInit(): void {
    this.loadProduct();

    this.productForm = this.formBuilder.group({
      description: ['description', [Validators.required, Validators.minLength(3)]],
      imageUrl: '',
      ownerId: '',
      price: '',
      title: ''
    });

  }

  loadProduct(): void {
    this.products = [];
    this.productGetSubs = this.productService.getProducts().subscribe(res => {
      Object.entries(res).map((p: any) => this.products.push({id: p[0], ...p[1]}));
    });
  }

  onDelete(id: any): void {
    this.productService.deleteProduct(id).subscribe(
      res => {
        console.log('RESPONSE: ', res);
        this.loadProduct();
      },
      err => {
        console.log('ERROR: ');
      }
    );
  }

  /*onEnviar() {
    console.log('VALOR: ', this.nameConatrol.value);
  }*/

  onEnviar2(): void {
    console.log('FORM GROUP: ', this.productForm.value);
    this.productSubs = this.productService.addProduct(this.productForm.value).subscribe(
      res => {
      console.log('RESP: ', res);
    },
    err => {
      console.log('ERROR DE SERVIDOR');
    }
    );
  }
  ngOnDestroy(): void {
    //this.productSubs.unsubscribe();
    this.productSubs ? this.productSubs.unsubscribe() : '';
    this.productGetSubs ? this.productGetSubs.unsubscribe() : '';
  }

}