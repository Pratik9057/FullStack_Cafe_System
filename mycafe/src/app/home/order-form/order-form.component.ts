import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from 'src/app/model/menu';
import { Order } from 'src/app/model/order';
import { MenuService } from 'src/app/service/menu.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent {
  menu!: Menu;
  menus!: Menu[];
  //patients!: Patient[];
  //patient: Patient;
  order!:Order;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private menuService: MenuService, /*private patientService: 
        PatientService,*/ private orderService: OrderService) {
    this.menu = new Menu();
    //this.patient = new Patient();
    this.order = new Order();
    
        }

        onDoctorSelect(option:any){
          this.menu.itemName = option.target.value;
        }

       /* onPatientSelect(option:any){
          this.patient.pname = option.target.value;
        }*/
 // }
   ngOnInit(): void {
    
       this.menuService.findAll().subscribe(data => {
        this.menus = data;
       });
       /*this.patientService.findAll().subscribe(data => {
         this.patients = data;
       });*/
    }
  

  onSubmit() {
    this.order.menuItem=this.menu.itemName;
    this.order.itemName=this.order.itemName;
    this.order.price=this.order.price;
    this.order.quantity=this.order.quantity;
    alert("data saved");
    //this.appointment.pname=this.patient.pname;
    //this.appointment.date=this.appointment.date.toString();
    this.orderService.save(this.order).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['./orders']);
 
  }
}

