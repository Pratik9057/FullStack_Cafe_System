import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit{
  order!: Order[];

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    alert("I am in Orderlist comp");
    this.orderService.findAll().subscribe(data => {
      this.order = data;
    });
  }
}
