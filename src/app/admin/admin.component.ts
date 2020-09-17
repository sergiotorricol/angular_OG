import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../shared/services/product.service';
import {Subscription} from 'rxjs';
import {AuthService} from '../shared/services/auth.service';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {

  products = [];

  productForm: FormGroup;

  productSubs: Subscription;
  productGetSubs: Subscription;
  productDeleteSubs: Subscription;
  productUpdateSubs: Subscription;
  idEdit: any;

  elderly=[];
young=[];

elderlysize;
youngsize;

habilitados=[];
inhabilitados=[];
habilitadossize;
inhabilitadossize;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
              private productService: ProductService) {
  }

  ngOnInit(): void {

    this.loadProduct();

    this.productForm = this.formBuilder.group({
      age: '',
      enable: '',
      name: '',
      urlImage: ''
    });

  }

  loadProduct(): void {
    this.products = [];
    this.elderly=[];
    this.young=[];
    this.habilitados=[];
    this.inhabilitados=[];
    this.productGetSubs = this.productService.getProducts().subscribe(res => {
      Object.entries(res).map((p: any) => this.products.push({id: p[0], ...p[1]}));
      this.elderly=this.products.filter(e=> e.age >= 65);
      this.young=this.products.filter(e=> e.age < 65);
      this.elderlysize=this.elderly.length;
      this.youngsize=this.young.length;
      this.habilitados=this.products.filter(e=>e.enable===true);
      this.inhabilitados=this.products.filter(e=>e.enable===false);
      this.habilitadossize=this.habilitados.length;
      this.inhabilitadossize=this.inhabilitados.length;
    });
  }

  onDelete(id: any): void {
    this.productDeleteSubs = this.productService.deleteProduct(id).subscribe(
      res => {
        console.log('RESPONSE: ', res);
        this.loadProduct();
      },
      err => {
        console.log('ERROR: ');
      }
    );
  }

  onEdit(product): void {
    this.idEdit = product.id;
    this.productForm.patchValue(product);
  }

  
  onEnviar2(): void {
    this.productSubs = this.productService.addProduct({
      ...this.productForm.value,
      ownerId: this.authService.getUserId()
    }).subscribe(
      res => {
        console.log('RESP: ', res);
        this.loadProduct();
      },
      err => {
        console.log('ERROR DE SERVIDOR');
      }
    );

  }

  public onLogout(): void {
    this.authService.logout();
  }
  onUpdateProduct(): void {
    this.productUpdateSubs = this.productService.updateProduct(
      this.idEdit,
      {
        ...this.productForm.value,
        ownerId: this.authService.getUserId()
      }
    ).subscribe(
      res => {
        console.log('RESP UPDATE: ', res);
        this.loadProduct();
      },
      err => {
        console.log('ERROR UPDATE DE SERVIDOR');
      }
    );
  }
  ngOnDestroy(): void {
    this.productSubs ? this.productSubs.unsubscribe() : '';
    this.productGetSubs ? this.productGetSubs.unsubscribe() : '';
    this.productDeleteSubs ? this.productDeleteSubs.unsubscribe() : '';
    this.productUpdateSubs ? this.productUpdateSubs.unsubscribe() : '';
  }

}