import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private usersUrl:string;

  constructor(private http:HttpClient) {
    this.usersUrl='http://localhost:8080/orders';
   }
   public findAll():Observable<Order[]>{
    return this.http.get<Order[]>(this.usersUrl);
   }
   public save(order:Order){
    return this.http.post<Order>(this.usersUrl,order);
   }
}
