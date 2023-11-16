import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../model/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private usersUrl:string;

  constructor(private http:HttpClient) {
    this.usersUrl='http://localhost:8080/menus';
   }
   public findAll():Observable<Menu[]>{
    return this.http.get<Menu[]>(this.usersUrl);
   }
   public save(menu:Menu){
    return this.http.post<Menu>(this.usersUrl,menu);
   }
}
