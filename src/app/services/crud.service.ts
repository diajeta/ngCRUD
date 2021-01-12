import { Products } from './../models/products';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  //base api url
  public url = environment.web_api_url_base;
  constructor(private http: HttpClient) { }

  //get all products list
  getProducts(): Observable<Products[]>{
    return this.http.get<Products[]>(this.url + 'view.php').pipe(map(data => {
      return data;
    }));
  }

  getProductDetails(id: number): Observable<Products[]>{
    return this.http.get<Products[]>(this.url + 'view_one.php?id='+id).pipe(map(response => {
      return response;
    }));
  }

  createProduct(data: any){
    return this.http.post(this.url + 'create.php', data).pipe(map(response => {
      return response;
    }));
  }

  updateProduct(data: any){
    return this.http.post(this.url + 'update.php', data).pipe(map(response => {
      return response;
    }));
  }

  deleteProduct(id: number){
    return this.http.get(this.url + 'delete.php?id='+id).pipe(map(response => {
      return response;
    }));
  }

}
