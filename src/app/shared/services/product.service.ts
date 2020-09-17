import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class ProductService {

  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getProducts(): Observable<any> {
    return this.http.get(`${this.url}/persons.json?auth=${localStorage.getItem('token')}`);
  }

  public addProduct(product: any): Observable<any> {
    return this.http.get(`${this.url}/persons.json?auth=${localStorage.getItem('token')}`, product);
  }

  public deleteProduct(id: any): Observable<any> {
    return this.http.delete(`${this.url}/persons/${id}.json?auth=${localStorage.getItem('token')}`);
  }

  public updateProduct(id: any, product: any): Observable<any> {
    return this.http.delete(`${this.url}/persons/${id}.json?auth=${localStorage.getItem('token')}`, product);
  }

}