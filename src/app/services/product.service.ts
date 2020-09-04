import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) { }

    public getProducts(): Observable<any>  {
      return this.http.get('https://studentss-test.firebaseio.com/students.json');
    }

    public addProduct(product: any): Observable<any> {
      return this.http.post('https://studentss-test.firebaseio.com/students.json', product);
    }

    public deleteProduct(id: any): Observable<any> {
      return this.http.delete(`https://studentss-test.firebaseio.com/students/${id}.json`);
    }

    public updateProduct(id: any, product: any): Observable<any> {
      return this.http.put(`https://studentss-test.firebaseio.com/students/${id}.json`, product);
    }

}