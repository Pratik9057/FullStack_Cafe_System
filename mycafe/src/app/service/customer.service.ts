import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private usersUrl:string;

  constructor(private http:HttpClient) {
    this.usersUrl='http://localhost:8080/customers';
   }
   public findAll():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.usersUrl);
   }
   public save(customer:Customer){
    return this.http.post<Customer>(this.usersUrl,customer);
   }
}
 